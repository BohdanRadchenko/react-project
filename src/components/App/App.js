import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';
// import Home from '../Home/Home';

import Home from '../Home/Home';

const App = () => (
  <>
    <header>
      <Header />
      <Home />
    </header>
    <Dashboard />
  </>
);

export default App;
