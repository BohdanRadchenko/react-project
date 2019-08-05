/*eslint-disable*/
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
