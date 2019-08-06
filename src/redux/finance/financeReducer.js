import { combineReducers } from 'redux';
import { transactionActionTypes } from './financeActions';

export const data = (state = [], { type, payload }) => {
  switch (type) {
    case transactionActionTypes.POST_TRANSACTION_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

export const error = (state = null, { type, payload }) => {
  switch (type) {
    case transactionActionTypes.POST_TRANSACTION_ERROR:
    case transactionActionTypes.GET_TRANSACTION_ERROR:
      return payload.error.message;

    case transactionActionTypes.POST_TRANSACTION_SUCCESS:
    case transactionActionTypes.GET_TRANSACTION_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({ data, error });
