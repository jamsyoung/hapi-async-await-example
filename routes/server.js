'use strict';

const Boom = require('boom');

module.exports = server => [
  {
    method: 'GET',
    path: '/_hc',
    async handler(request, h) {
      try {
        return JSON.stringify(server.info);
      } catch (err) {
        throw h.internal('Internal  error', err);
      }
    }
  }
];