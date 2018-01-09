import React from 'react';
import AsyncRoute from './modules/async-route';

// @TODO: find a better implentation for this
if (global) {
  global.System = {import() {}};
}

const noMatch = {
  component: props => <AsyncRoute props={props} loadingPromise={System.import('./pages/no-match')} />
};

const routes = [
  {
    path: '/',
    exact: true,
    component: props => <AsyncRoute props={props} loadingPromise={System.import('./pages/homepage')} />
  }
];

export default routes.concat(noMatch);
