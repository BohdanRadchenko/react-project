import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import styles from '../Header/Header.module.css';
import { refreshUser } from '../../redux/session/sessionOperations';
// import Modal from '../Modal/ModalContainer';

class App extends Component {
  static propTypes = {
    handleRefreshUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { handleRefreshUser } = this.props;
    handleRefreshUser();
  }

  render() {
    return (
      <>
        <header className={styles.header}>
          <Header />
        </header>
        <Dashboard />
        {/* <Modal /> */}
      </>
    );
  }
}

const mDTP = {
  handleRefreshUser: refreshUser,
};

export default connect(
  null,
  mDTP,
)(App);
