import React from 'react';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <h2 className={styles.headerText}>Wallet</h2>
    <ul className={styles.logoItem}>
      <li>Имя</li>
      <li>Выйти</li>
    </ul>
  </div>
);

export default Header;
