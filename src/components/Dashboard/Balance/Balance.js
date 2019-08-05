import React from 'react';
import styles from './Balance.module.css';
// { props }
const Balance = () => (
  <div className={styles.balanceDiv}>
    <p className={styles.balanceText}>Баланс:</p>
    <p className={styles.balanceValue}> грн</p>
  </div>
);
// {props}

export default Balance;
