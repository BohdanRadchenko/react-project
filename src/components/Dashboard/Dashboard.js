import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Stats from '../../pages/Stats';
import SideBar from './Sidebar/Sidebar';

class Dashboard extends Component {
  state = {
    // balance: 1000000.0,
  };

  render() {
    // const { balance } = this.state;
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stats" component={Stats} />
          <Redirect to="/" />
        </Switch>
        <SideBar />
        {/* props={balance} */}
      </>
    );
  }
}

export default Dashboard;
