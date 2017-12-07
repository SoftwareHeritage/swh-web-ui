# Copyright (C) 2015-2017  The Software Heritage developers
# See the AUTHORS file at the top-level directory of this distribution
# License: GNU Affero General Public License version 3, or any later version
# See top-level LICENSE file for more information

from nose.tools import istest
from rest_framework.test import APITestCase
from unittest.mock import patch

from swh.web.tests.testbase import SWHWebTestBase


class PersonApiTestCase(SWHWebTestBase, APITestCase):

    @patch('swh.web.api.views.person.service')
    @istest
    def api_person(self, mock_service):
        # given
        stub_person = {
            'id': '198003',
            'name': 'Software Heritage',
            'email': 'robot@softwareheritage.org',
        }
        mock_service.lookup_person.return_value = stub_person

        # when
        rv = self.client.get('/api/1/person/198003/')

        # then
        self.assertEquals(rv.status_code, 200)
        self.assertEquals(rv['Content-Type'], 'application/json')
        self.assertEquals(rv.data, stub_person)

    @patch('swh.web.api.views.person.service')
    @istest
    def api_person_not_found(self, mock_service):
        # given
        mock_service.lookup_person.return_value = None

        # when
        rv = self.client.get('/api/1/person/666/')

        # then
        self.assertEquals(rv.status_code, 404)
        self.assertEquals(rv['Content-Type'], 'application/json')
        self.assertEquals(rv.data, {
            'exception': 'NotFoundExc',
            'reason': 'Person with id 666 not found.'})