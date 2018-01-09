'use strict';

module.exports = server => {
  return [...require('./frontend.js'), ...require('./server.js')(server)];
};
