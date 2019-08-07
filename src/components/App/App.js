import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import styles from '../Header/Header.module.css';
// import Modal from '../Modal/ModalContainer';

const App = () => (
  <>
    <header className={styles.header}>
      <Header />
    </header>
    <Dashboard />
    {/* <Modal /> */}
  </>
);

export default App;
