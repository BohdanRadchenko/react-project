import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from '../App/App';
import { store, persistor } from '../../redux/store';

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router basename="/">
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>
);

export default Root;
