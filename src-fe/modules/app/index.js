import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Shell from '../shell';

function Root() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}

export default Root;
