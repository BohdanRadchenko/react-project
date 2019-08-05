import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SignUpPage from '../../pages/SignUpPage';
import Home from '../../pages/Home';
import Stats from '../../pages/Stats';
import SignInPage from '../../pages/SignInPage';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/stats" component={Stats} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Dashboard;
