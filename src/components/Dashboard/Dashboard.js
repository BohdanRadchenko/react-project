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
// import ProtectedComponent from './hoc/PrivateRoute';
// import PrivateRoute from './PrivateRoute';
import Header from '../Header/Header';
import css from '../Header/Header.module.css';
import { getTransactions } from '../../redux/finance/financeSelectors';

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

const AsyncCurrencies = Loadable({
  loader: () =>
    import(
      '../../components/Dashboard/Currencies/Currencies' /* webpackChunkName: "currencies-page" */
    ),
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.transactions !== this.props.transactions) {
      const { transactions } = this.props;
      this.setState({
        items: [...transactions],
      });
    }
  }
  render() {
    const { items } = this.state;

    const balance = new Intl.NumberFormat('UAH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(statisticsCount(items).balance);
    return (
      <div className={css.innerContainer}>
        <header className={css.header}>
          <Header />
        </header>
        <div className={styles.container}>
          <div className={styles.leftSideBar}>
            <SideBar balance={balance} />
          </div>
          <div className={styles.rightSideBar}>
            <Switch>
              <Route path="/dashboard/home" component={AsyncHome} />
              <Route path="/dashboard/stats" component={AsyncStats} />
              <Route path="/dashboard/currencies" component={AsyncCurrencies} />
              <Redirect to="/dashboard/home" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // transactions: db,
  transactions: getTransactions(state),
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
