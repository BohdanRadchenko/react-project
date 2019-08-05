import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Stats from '../pages/Stats';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/stats" component={Stats} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Dashboard;
