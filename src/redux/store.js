import { createStore } from 'redux';
// import { combineReducers } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = () => ({
  user: null,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
