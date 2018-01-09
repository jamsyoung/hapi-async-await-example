'use strict';

const Hapi = require('hapi');
const config = require('./config.js');

(async () => {
  const server = await new Hapi.Server(config.get('hapi').options);

  await server.register([
    require('inert'),
    require('vision'),
    {plugin: require('hapi-swagger'), options: config.get('swagger').options}
  ]);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
  }

  server.route(require('./routes/index.js')(server));
})();
