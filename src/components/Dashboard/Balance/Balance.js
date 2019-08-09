import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance }) => (
  <div className={styles.balanceDiv}>
    <p className={styles.balanceText}>Balance:</p>
    <p className={styles.balanceValue}> {balance} UAH</p>
  </div>
);

Balance.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default Balance;
