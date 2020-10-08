# Copyright (C) 2020  The Software Heritage developers
# See the AUTHORS file at the top-level directory of this distribution
# License: GNU Affero General Public License version 3, or any later version
# See top-level LICENSE file for more information

from distutils.util import strtobool
import json
from typing import Dict

import requests

from rest_framework.decorators import renderer_classes
from rest_framework.request import Request
from rest_framework.response import Response

from swh.model.identifiers import ORIGIN, parse_swhid
from swh.web.api.apidoc import api_doc
from swh.web.api.apiurls import api_route
from swh.web.api.renderers import PlainTextRenderer
from swh.web.common import archive
from swh.web.config import get_config

API_GRAPH_PERM = "swh.web.api.graph"


def _resolve_origin_swhid(swhid: str, origin_urls: Dict[str, str]) -> str:
    """
    Resolve origin url from its swhid sha1 representation.
    """
    parsed_swhid = parse_swhid(swhid)
    if parsed_swhid.object_type == ORIGIN:
        if parsed_swhid.object_id in origin_urls:
            return origin_urls[parsed_swhid.object_id]
        else:
            origin_info = list(
                archive.lookup_origins_by_sha1s([parsed_swhid.object_id])
            )[0]
            assert origin_info is not None
            origin_urls[parsed_swhid.object_id] = origin_info["url"]
            return origin_info["url"]
    else:
        return swhid


def _resolve_origin_swhids_in_graph_response(response: requests.Response) -> str:
    """
    Resolve origin urls from their swhid sha1 representations in graph service
    responses.
    """
    content_type = response.headers["Content-Type"]
    origin_urls: Dict[str, str] = {}
    if content_type == "application/x-ndjson":
        processed_response = []
        for line in response.text.split("\n")[:-1]:
            swhids = json.loads(line)
            processed_line = []
            for swhid in swhids:
                processed_line.append(_resolve_origin_swhid(swhid, origin_urls))
            processed_response.append(json.dumps(processed_line))
        return "\n".join(processed_response) + "\n"
    elif content_type == "text/plain":
        processed_response = []
        for line in response.text.split("\n")[:-1]:
            processed_line = []
            swhids = line.split(" ")
            for swhid in swhids:
                processed_line.append(_resolve_origin_swhid(swhid, origin_urls))
            processed_response.append(" ".join(processed_line))
        return "\n".join(processed_response) + "\n"
    return response.text


@api_route(r"/graph/", "api-1-graph-doc")
@api_doc("/graph/")
def api_graph(request: Request) -> None:
    """
    .. http:get:: /api/1/graph/(graph_query)/

        Provide fast access to the graph representation of the Software Heritage
        archive.

        That endpoint acts as a proxy for the `Software Heritage Graph service
        <https://docs.softwareheritage.org/devel/swh-graph/index.html>`_.

        It provides fast access to the `graph representation
        <https://docs.softwareheritage.org/devel/swh-model/data-model.html#data-structure>`_
        of the Software Heritage archive.

        The full documentation of the available Graph REST API can be found `here
        <https://docs.softwareheritage.org/devel/swh-graph/api.html>`_.

        .. warning::
            That endpoint is not publicly available and requires authentication and
            special user permission in order to be able to request it.

        :param string graph_query: query to forward to the Software Heritage Graph
            archive (see its `documentation
            <https://docs.softwareheritage.org/devel/swh-graph/api.html>`_)
        :query boolean resolve_origins: extra parameter defined by that proxy enabling
            to resolve origin urls from their sha1 representations

        :statuscode 200: no error
        :statuscode 400: an invalid graph query has been provided
        :statuscode 404: provided graph node cannot be found

        **Examples:**

        .. parsed-literal::

            :swh_web_api:`graph/leaves/swh:1:dir:432d1b21c1256f7408a07c577b6974bbdbcc1323/`
            :swh_web_api:`graph/neighbors/swh:1:rev:f39d7d78b70e0f39facb1e4fab77ad3df5c52a35/`
            :swh_web_api:`graph/randomwalk/swh:1:cnt:94a9ed024d3859793618152ea559a168bbcbb5e2/ori?direction=backward`
            :swh_web_api:`graph/randomwalk/swh:1:cnt:94a9ed024d3859793618152ea559a168bbcbb5e2/ori?direction=backward&limit=-2`
            :swh_web_api:`graph/visit/nodes/swh:1:snp:40f9f177b8ab0b7b3d70ee14bbc8b214e2b2dcfc?direction=backward&resolve_origins=true`
            :swh_web_api:`graph/visit/edges/swh:1:snp:40f9f177b8ab0b7b3d70ee14bbc8b214e2b2dcfc?direction=backward&resolve_origins=true`
            :swh_web_api:`graph/visit/paths/swh:1:dir:644dd466d8ad527ea3a609bfd588a3244e6dafcb?direction=backward&resolve_origins=true`

    """
    return None


@api_route(r"/graph/(?P<graph_query>.+)/", "api-1-graph")
@renderer_classes([PlainTextRenderer])
def api_graph_proxy(request: Request, graph_query: str) -> Response:
    if not bool(request.user and request.user.is_authenticated):
        return Response("Authentication credentials were not provided.", status=401)
    if not request.user.has_perm(API_GRAPH_PERM):
        return Response(
            "You do not have permission to perform this action.", status=403
        )
    graph_query_url = get_config()["graph"]["server_url"]
    graph_query_url += graph_query
    if request.GET:
        graph_query_url += "?" + request.GET.urlencode(safe="/;:")
    response = requests.get(graph_query_url)
    response_text = response.text
    resolve_origins = strtobool(request.GET.get("resolve_origins", "false"))
    if response.status_code == 200 and resolve_origins:
        response_text = _resolve_origin_swhids_in_graph_response(response)
    return Response(
        response_text,
        status=response.status_code,
        content_type=response.headers["Content-Type"],
    )