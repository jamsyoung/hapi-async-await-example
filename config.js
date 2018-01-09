'use strict';

const nconf = require('nconf');
const pkg = require('./package.json');
const requiredEnvVars = ['ENVIRONMENT', 'PORT'];
const whitelistEnvVars = [...requiredEnvVars];

// register whitelisted env vars
nconf.env(whitelistEnvVars);

// load local config, if available
nconf.file('public', './env.json');
nconf.file('private', './._ignore/env.json');

if (requiredEnvVars.some(item => nconf.get(item) === undefined || nconf.get(item).lenght === 0)) {
  console.error(`Startup config incomplete:`);
  requiredEnvVars.forEach(item => {
    console.error(`${item}: ${nconf.get(item) || 'undefined'}`);
  });
  process.exit(1);
}

const config = {
  default: {
    name: pkg.name,
    hapi: {options: {port: nconf.get('PORT')}},
    swagger: {
      options: {
        info: {description: pkg.description, title: pkg.name, version: pkg.version},
        grouping: 'tags',
        sortTags: 'name'
      }
    }
  },
  prod: {}
};

switch (nconf.get('ENVIRONMENT').toLowerCase()) {
  case 'prod':
    nconf.defaults(config.prod);
    break;

  default:
    nconf.defaults(config.default);
}

nconf.overrides(config.default);

module.exports = nconf;
