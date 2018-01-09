import React from 'react';
import {render} from 'react-dom';
import App from './modules/app';

const mount = RootComponent => {
  render(<RootComponent />, document.getElementById('mount'));
};

mount(App);
