import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => (
  <div className={styles.div}>
    <h2 className={styles.title}>Welcome to Wallet!</h2>
    <img
      src="/static/media/logo.49db5ab8.svg"
      alt="logo-wallet"
      width="200px"
    />
    <p className={styles.text}>add your first transaction using the button</p>
  </div>
);

export default Welcome;
