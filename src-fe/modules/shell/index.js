import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Route, Switch} from 'react-router-dom';
import routes from '../../routes';
import {} from './styles.css';
import Homepage from '../../pages/homepage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <shell-container>
        <content-container>
          <Helmet titleTemplate="%s" defaultTitle="TNKR CMS">
            <meta name="description" content="TNKR CMS" />
          </Helmet>
          <Switch>{routes.map((route, i) => <Route key={i} {...route} />)}</Switch>
        </content-container>
      </shell-container>
    );
  }
}

export default App;
