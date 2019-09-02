import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import Media from 'react-media';
import Loader from './Loader';
import SideBar from './Sidebar/Sidebar';
import statisticsCount from '../../helpers/statisticsCount';
import QuotesModal from './Quotes/QuotesModal';
import styles from './Dashboard.module.css';
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
    import('./Currencies/Currencies' /* webpackChunkName: "currencies-page" */),
  loading: Loader,
  timeout: 10000,
  delay: 200,
});

class Dashboard extends Component {
  static propTypes = {
    transactions: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.any).isRequired,
    ).isRequired,
  };

  state = {
    items: [],
    quotesModalIsOpen: false,
  };

  componentDidMount() {
    const { transactions } = this.props;
    const { quotesModalIsOpen } = this.state;
    this.setState({
      items: [...transactions],
      quotesModalIsOpen: true,
    });
    if (quotesModalIsOpen) {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidUpdate(prevProps) {
    const { transactions } = this.props;
    if (prevProps.transactions !== transactions) {
      this.onUpdate(transactions);
    }
  }

  handleQuotesModalClose = () => {
    this.setState({ quotesModalIsOpen: false });
  };

  onUpdate = transactions =>
    this.setState({
      items: [...transactions],
    });

  render() {
    const { items, quotesModalIsOpen } = this.state;

    const balance = new Intl.NumberFormat('ua', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(statisticsCount(items).balance);
    return (
      <div className={css.innerContainer}>
        <header className={css.header}>
          <Header />
        </header>
        <div className={styles.container}>
          {quotesModalIsOpen && (
            <QuotesModal onClose={this.handleQuotesModalClose} />
          )}
          <div className={styles.leftSideBar}>
            <SideBar balance={balance} />
          </div>
          <div className={styles.rightSideBar}>
            <Media query="(max-width: 766px)">
              {screenIsSmall =>
                screenIsSmall ? (
                  <Switch>
                    <Route path="/dashboard/home" component={AsyncHome} />
                    <Route path="/dashboard/stats" component={AsyncStats} />
                    <Route
                      path="/dashboard/currencies"
                      component={AsyncCurrencies}
                    />
                    <Redirect to="/dashboard/home" />
                  </Switch>
                ) : (
                  <Switch>
                    <Route path="/dashboard/home" component={AsyncHome} />
                    <Route path="/dashboard/stats" component={AsyncStats} />
                    <Redirect to="/dashboard/home" />
                  </Switch>
                )
              }
            </Media>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: getTransactions(state),
});

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
