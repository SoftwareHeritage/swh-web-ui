/**
 * Copyright (C) 2019-2020  The Software Heritage developers
 * See the AUTHORS file at the top-level directory of this distribution
 * License: GNU Affero General Public License version 3, or any later version
 * See top-level LICENSE file for more information
 */

export function showBadgeInfoModal(objectType, objectSWHID) {
  let badgeImageUrl;
  let badgeLinkUrl;
  if (objectType === 'origin') {
    badgeImageUrl = Urls.swh_badge(objectType, objectSWHID);
    badgeLinkUrl = `${Urls.browse_origin()}?origin_url=${objectSWHID}`;
  } else {
    const pos = objectSWHID.indexOf(';');
    if (pos !== -1) {
      badgeImageUrl = Urls.swh_badge_swhid(objectSWHID.slice(0, pos));
    } else {
      badgeImageUrl = Urls.swh_badge_swhid(objectSWHID);
    }
    badgeLinkUrl = Urls.browse_swhid(objectSWHID);
  }
  let urlPrefix = `${window.location.protocol}//${window.location.hostname}`;
  if (window.location.port) {
    urlPrefix += `:${window.location.port}`;
  }
  const absoluteBadgeImageUrl = `${urlPrefix}${badgeImageUrl}`;
  const absoluteBadgeLinkUrl = `${urlPrefix}${badgeLinkUrl}`;
  const html = `
  <a href="${absoluteBadgeLinkUrl}">
    <img class="swh-badge" src="${absoluteBadgeImageUrl}">
  </a>
  <div>
    <label>HTML</label>
    <pre class="swh-badge-html">&lt;a href="${absoluteBadgeLinkUrl}"&gt;
    &lt;img src="${absoluteBadgeImageUrl}"&gt;
&lt;/a&gt;</pre>
  </div>
  <div>
    <label>Markdown</label>
    <pre class="swh-badge-md">[![SWH](${absoluteBadgeImageUrl})](${absoluteBadgeLinkUrl})</pre>
  </div>
  <div>
    <label>reStructuredText</label>
    <pre class="swh-badge-rst">.. image:: ${absoluteBadgeImageUrl}
    :target: ${absoluteBadgeLinkUrl}</pre>
  </div>`;
  swh.webapp.showModalHtml('Software Heritage badge integration', html);
}
