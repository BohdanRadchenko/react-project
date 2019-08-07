import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
// import Currencies from '../Dashboard/Currencies/Currencies';
import styles from '../Header/Header.module.css';
// import Modal from '../Modal/ModalContainer';

const App = () => (
  <>
    <header className={styles.header}>
      <Header />
    </header>
    <Dashboard />
    {/* <Currencies /> */}
    {/* <Modal /> */}
  </>
);

export default App;
