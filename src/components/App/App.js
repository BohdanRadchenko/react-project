import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
import Currencies from '../Dashboard/Currencies/Currencies';

const App = () => (
  <>
    <header>
      <Header />
    </header>
    <Dashboard />
    <Currencies />
  </>
);

export default App;
