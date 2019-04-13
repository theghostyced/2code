import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from '../../config/routes';
import './root.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map(route => 
              <Route
                path={route.path}
                key={route.name}
                component={route.component}
              />
              )
          }
        </Switch>
      </Router>
    );
  }
}

export default App;
