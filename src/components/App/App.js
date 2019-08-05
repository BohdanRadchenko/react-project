import React from 'react';
import Header from '../Header/Header';
import Dashboard from '../Dashboard/Dashboard';

//
import TransactionHistory from '../Home/TransactionsTable/TransactionsTable';

const App = () => (
  <>
    <header>
      <Header />
      <TransactionHistory />
    </header>
    <Dashboard />
  </>
);

export default App;
