import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader';
import Sidebar from './Sidebar/Sidebar';

const AsyncHome = Loadable({
  loader: () => import('../../pages/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncStats = Loadable({
  loader: () => import('../../pages/Stats' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncSignUp = Loadable({
  loader: () =>
    import('../../pages/SignUpPage' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncSignIn = Loadable({
  loader: () =>
    import('../../pages/SignInPage' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/signup" component={AsyncSignUp} />
          <Route path="/signin" component={AsyncSignIn} />
          <Route path="/stats" component={AsyncStats} />
          <Redirect to="/" />
        </Switch>
        <Sidebar />
      </>
    );
  }
}

export default Dashboard;
