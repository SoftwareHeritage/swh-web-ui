# Copyright (C) 2020  The Software Heritage developers
# See the AUTHORS file at the top-level directory of this distribution
# License: GNU Affero General Public License version 3, or any later version
# See top-level LICENSE file for more information

from datetime import datetime, timedelta
import hashlib
from typing import Any, Dict, Optional

import sentry_sdk

from django.core.cache import cache
from django.http import HttpRequest
from django.utils import timezone
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed, ValidationError

from swh.web.auth.keycloak import KeycloakOpenIDConnect
from swh.web.auth.models import OIDCUser
from swh.web.auth.utils import get_oidc_client

# OpenID Connect client to communicate with Keycloak server
_oidc_client: KeycloakOpenIDConnect = get_oidc_client()


def _oidc_user_from_decoded_token(decoded_token: Dict[str, Any]) -> OIDCUser:
    # compute an integer user identifier for Django User model
    # by concatenating all groups of the UUID4 user identifier
    # generated by Keycloak and converting it from hex to decimal
    user_id = int("".join(decoded_token["sub"].split("-")), 16)

    # create a Django user that will not be saved to database
    user = OIDCUser(
        id=user_id,
        username=decoded_token["preferred_username"],
        password="",
        first_name=decoded_token["given_name"],
        last_name=decoded_token["family_name"],
        email=decoded_token["email"],
    )

    # set is_staff user property based on groups
    if "groups" in decoded_token:
        user.is_staff = "/staff" in decoded_token["groups"]

    # extract user permissions if any
    resource_access = decoded_token.get("resource_access", {})
    client_resource_access = resource_access.get(_oidc_client.client_id, {})
    user.permissions = set(client_resource_access.get("roles", []))

    # add user sub to custom User proxy model
    user.sub = decoded_token["sub"]

    return user


def _oidc_user_from_profile(oidc_profile: Dict[str, Any]) -> OIDCUser:

    # decode JWT token
    try:
        access_token = oidc_profile["access_token"]
        decoded_token = _oidc_client.decode_token(access_token)
    # access token has expired or is invalid
    except Exception:
        # get a new access token from authentication provider
        oidc_profile = _oidc_client.refresh_token(oidc_profile["refresh_token"])
        # decode access token
        decoded_token = _oidc_client.decode_token(oidc_profile["access_token"])

    # create OIDCUser from decoded token
    user = _oidc_user_from_decoded_token(decoded_token)

    # get authentication init datetime
    auth_datetime = datetime.fromtimestamp(decoded_token["auth_time"])
    exp_datetime = datetime.fromtimestamp(decoded_token["exp"])

    # compute OIDC tokens expiration date
    oidc_profile["expires_at"] = exp_datetime
    oidc_profile["refresh_expires_at"] = auth_datetime + timedelta(
        seconds=oidc_profile["refresh_expires_in"]
    )

    # add OIDC profile data to custom User proxy model
    for key, val in oidc_profile.items():
        if hasattr(user, key):
            setattr(user, key, val)

    # put OIDC profile in cache or update it after token renewal
    cache_key = f"oidc_user_{user.id}"
    if cache.get(cache_key) is None or access_token != oidc_profile["access_token"]:
        # set cache key TTL as refresh token expiration time
        assert user.refresh_expires_at
        ttl = int(user.refresh_expires_at.timestamp() - timezone.now().timestamp())

        # save oidc_profile in cache
        cache.set(cache_key, oidc_profile, timeout=max(0, ttl))

    return user


class OIDCAuthorizationCodePKCEBackend:
    def authenticate(
        self, request: HttpRequest, code: str, code_verifier: str, redirect_uri: str
    ) -> Optional[OIDCUser]:

        user = None
        try:
            # try to authenticate user with OIDC PKCE authorization code flow
            oidc_profile = _oidc_client.authorization_code(
                code, redirect_uri, code_verifier=code_verifier
            )

            # create Django user
            user = _oidc_user_from_profile(oidc_profile)

        except Exception as e:
            sentry_sdk.capture_exception(e)

        return user

    def get_user(self, user_id: int) -> Optional[OIDCUser]:
        # get oidc profile from cache
        oidc_profile = cache.get(f"oidc_user_{user_id}")
        if oidc_profile:
            try:
                user = _oidc_user_from_profile(oidc_profile)
                # restore auth backend
                setattr(user, "backend", f"{__name__}.{self.__class__.__name__}")
                return user
            except Exception as e:
                sentry_sdk.capture_exception(e)
                return None
        else:
            return None


class OIDCBearerTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.META.get("HTTP_AUTHORIZATION")
        if auth_header is None:
            return None

        try:
            auth_type, refresh_token = auth_header.split(" ", 1)
        except ValueError:
            raise AuthenticationFailed("Invalid HTTP authorization header format")

        if auth_type != "Bearer":
            raise AuthenticationFailed(
                (f"Invalid or unsupported HTTP authorization" f" type ({auth_type}).")
            )
        try:

            # compute a cache key from the token that does not exceed
            # memcached key size limit
            hasher = hashlib.sha1()
            hasher.update(refresh_token.encode("ascii"))
            cache_key = f"api_token_{hasher.hexdigest()}"

            # check if an access token is cached
            access_token = cache.get(cache_key)

            # attempt to decode access token
            try:
                decoded_token = _oidc_client.decode_token(access_token)
            except Exception:
                # access token is None or it has expired
                decoded_token = None

            if access_token is None or decoded_token is None:
                # get a new access token from authentication provider
                access_token = _oidc_client.refresh_token(refresh_token)["access_token"]
                # decode access token
                decoded_token = _oidc_client.decode_token(access_token)
                # compute access token expiration
                exp = datetime.fromtimestamp(decoded_token["exp"])
                ttl = int(exp.timestamp() - timezone.now().timestamp())
                # save access token in cache while it is valid
                cache.set(cache_key, access_token, timeout=max(0, ttl))

            # create Django user
            user = _oidc_user_from_decoded_token(decoded_token)
        except UnicodeEncodeError as e:
            sentry_sdk.capture_exception(e)
            raise ValidationError("Invalid bearer token")
        except Exception as e:
            sentry_sdk.capture_exception(e)
            raise AuthenticationFailed(str(e))

        return user, None
