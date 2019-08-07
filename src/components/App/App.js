import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
// import Modal from '../Modal/ModalContainer';
import Home from '../Home/Home';

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <Dashboard />
    <Home />
    {/* <Modal /> */}
  </>
);

export default App;
