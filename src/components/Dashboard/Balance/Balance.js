import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance }) => (
  <div className={styles.balanceDiv}>
    <p className={styles.balanceText}>Balance:</p>
    <div className={styles.innerValue}>
      <p className={styles.balanceValue}>{balance}</p>
      <p className={styles.balanceCurr}>UAH</p>
    </div>
  </div>
);

Balance.propTypes = {
  balance: PropTypes.string.isRequired,
};

export default Balance;
