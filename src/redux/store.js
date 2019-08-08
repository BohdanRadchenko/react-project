import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sessionReducer from './session/sessionReducer';
import financeReducer from './finance/financeReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducer),
  finance: financeReducer,
});

const middleware = [ReduxThunk];

const enhancer = applyMiddleware(...middleware);

export const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);
