/**
 * Copyright (C) 2019  The Software Heritage developers
 * See the AUTHORS file at the top-level directory of this distribution
 * License: GNU Affero General Public License version 3, or any later version
 * See top-level LICENSE file for more information
 */

import '@cypress/code-coverage/support';

import {httpGetJson} from '../utils';

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
});

before(function() {
  this.unarchivedRepo = {
    url: 'https://github.com/SoftwareHeritage/swh-web',
    revision: '7bf1b2f489f16253527807baead7957ca9e8adde',
    snapshot: 'd9829223095de4bb529790de8ba4e4813e38672d',
    rootDirectory: '7d887d96c0047a77e2e8c4ee9bb1528463677663',
    content: [{
      sha1git: 'b203ec39300e5b7e97b6e20986183cbd0b797859'
    }]
  };

  this.origin = [{
    url: 'https://github.com/memononen/libtess2',
    content: [{
      path: 'Source/tess.h'
    }, {
      path: 'premake4.lua'
    }],
    directory: [{
      path: 'Source',
      id: 'cd19126d815470b28919d64b2a8e6a3e37f900dd'
    }],
    revisions: [],
    invalidSubDir: 'Source1'
  }, {
    url: 'https://github.com/wcoder/highlightjs-line-numbers.js',
    content: [],
    directory: [],
    revisions: ['1c480a4573d2a003fc2630c21c2b25829de49972']
  }];

  const getMetadataForOrigin = async originUrl => {
    const originVisitsApiUrl = this.Urls.api_1_origin_visits(originUrl);
    const originVisits = await httpGetJson(originVisitsApiUrl);
    const lastVisit = originVisits[0];
    const snapshotApiUrl = this.Urls.api_1_snapshot(lastVisit.snapshot);
    const lastOriginSnapshot = await httpGetJson(snapshotApiUrl);
    const revisionApiUrl = this.Urls.api_1_revision(lastOriginSnapshot.branches.HEAD.target);
    const lastOriginHeadRevision = await httpGetJson(revisionApiUrl);
    return {
      'directory': lastOriginHeadRevision.directory,
      'revision': lastOriginHeadRevision.id,
      'snapshot': lastOriginSnapshot.id
    };
  };

  cy.visit('/').window().then(async win => {
    this.Urls = win.Urls;

    for (let origin of this.origin) {

      const metadata = await getMetadataForOrigin(origin.url);
      const directoryApiUrl = this.Urls.api_1_directory(metadata.directory);
      origin.dirContent = await httpGetJson(directoryApiUrl);
      origin.rootDirectory = metadata.directory;
      origin.revisions.push(metadata.revision);
      origin.snapshot = metadata.snapshot;

      for (let content of origin.content) {

        cy.visit(this.Urls.browse_origin_content(origin.url, content.path))
          .window().then(win => {
            const contentMetaData = win.swh.webapp.getBrowsedSwhObjectMetadata();

            content.name = contentMetaData.filename;
            content.sha1git = contentMetaData.sha1_git;
            content.directory = contentMetaData.directory;

            content.rawFilePath = this.Urls.browse_content_raw(`sha1_git:${content.sha1git}`) +
                                `?filename=${encodeURIComponent(content.name)}`;

            cy.request(content.rawFilePath)
              .then((response) => {
                const fileText = response.body;
                const fileLines = fileText.split('\n');
                content.numberLines = fileLines.length;

                // If last line is empty its not shown
                if (!fileLines[content.numberLines - 1]) content.numberLines -= 1;
              });
          });

      }

    }
  });
});

// force the use of fetch polyfill wrapping XmlHttpRequest
// in order for cypress to be able to intercept and stub them
Cypress.on('window:before:load', win => {
  win.fetch = null;
});

// Ensure code coverage data do not get lost each time a new
// page is loaded during a single test execution
let coverage = {};

Cypress.on('window:before:unload', e => {
  coverage = Object.assign(coverage, e.currentTarget.__coverage__);
});

beforeEach(function() {
  coverage = {};
});

afterEach(function() {
  cy.task('combineCoverage', coverage);
});
