import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loader from '../Dashboard/Loader';
import ProtectedComponent from '../Dashboard/hoc/PrivateRoute';

// import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../Header/Header';
import styles from '../Header/Header.module.css';
import { refreshUser } from '../../redux/session/sessionOperations';

// import Modal from '../Modal/ModalContainer';
// import Home from '../Home/Home';
import { getTransactions } from '../../redux/finance/financeOperations';

const AsyncDashboard = Loadable({
  loader: () =>
    import('../Dashboard/Dashboard' /* webpackChunkName: "dashboard-page" */),
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

class App extends Component {
  static propTypes = {
    handleRefreshUser: PropTypes.func.isRequired,
    handleGetTransactions: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { handleRefreshUser, handleGetTransactions } = this.props;
    handleRefreshUser();
    handleGetTransactions();
  }

  render() {
    return (
      <>
        <header className={styles.header}>
          <Header />
        </header>
        <Switch>
          <Route path="/signup" component={AsyncSignUp} />
          <Route path="/signin" component={AsyncSignIn} />
          <ProtectedComponent path="/dashboard" component={AsyncDashboard} />
          <Redirect to="/dashboard/home" />
        </Switch>
      </>
    );
  }
}

const mDTP = {
  handleRefreshUser: refreshUser,
  handleGetTransactions: getTransactions,
};

export default connect(
  null,
  mDTP,
)(App);
