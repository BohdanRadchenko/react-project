import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance }) => (
  <div className={styles.balanceDiv}>
    <p className={styles.balanceText}>Баланс:</p>
    <p className={styles.balanceValue}> {balance} грн</p>
  </div>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Balance;
