import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import sessionReducer from './session/sessionReducer';
import financeReducer from './finance/financeReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  finance: financeReducer,
});

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
