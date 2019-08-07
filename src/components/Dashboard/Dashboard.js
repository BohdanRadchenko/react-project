/*eslint-disable*/
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import Loader from './Loader';
import SideBar from './Sidebar/Sidebar';
import db from '../../db.json';
import statisticsCount from '../../helpers/statisticsCount';
import styles from './Dashboard.module.css';

const AsyncHome = Loadable({
  loader: () => import('../../pages/Home' /* webpackChunkName: "home-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncStats = Loadable({
  loader: () =>
    import('../../pages/Stats' /* webpackChunkName: "stats-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncSignUp = Loadable({
  loader: () =>
    import('../../pages/SignUpPage' /* webpackChunkName: "signUp-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

const AsyncSignIn = Loadable({
  loader: () =>
    import('../../pages/SignInPage' /* webpackChunkName: "signIn-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class Dashboard extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const { transactions } = this.props;
    this.setState({
      items: [...transactions],
    });
  }

  render() {
    const { items } = this.state;
    const balance = statisticsCount(items).balance;
    return (
      <div className={styles.container}>
        <div className={styles.leftSideBar}>
          <SideBar balance={balance} />
        </div>
        <div className={styles.rightSideBar}>
          <Switch>
            <Route path="/" exact component={AsyncHome} />
            <Route path="/signup" component={AsyncSignUp} />
            <Route path="/signin" component={AsyncSignIn} />
            <Route path="/stats" component={AsyncStats} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: db,
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
