/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as nameSelector from '../../redux/session/sessionSelectors';
// import { getUser } from '../../redux/session/sessionActions';
import styles from './Header.module.css';
import * as sessionActions from '../../redux/session/sessionActions';

const logo = require('../../logo.svg');

const UserLog = ({ user, onLogOut }) => (
  <>
    <div className={styles.headerLogo}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.headerText}>
        <p>Wallet</p>
      </div>
    </div>
    <div className={styles.headerName}>
      <p className={styles.headerUser}>{user}</p>
      <button type="button" className={styles.headerButton} onClick={onLogOut}>
        Выйти
      </button>
    </div>
  </>
);

UserLog.defaultProps = {
  user: '',
};

UserLog.propTypes = {
  user: PropTypes.string,
  onLogOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: nameSelector.getUserName(state),
});

const mapDispatchToProps = {
  onLogOut: sessionActions.logOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLog);
