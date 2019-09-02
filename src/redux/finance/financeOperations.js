import axios from 'axios';
import {
  postTransactionRequest,
  postTransactionSuccesss,
  postTransactionError,
  getTransactionRequest,
  getTransactionSuccesss,
  getTransactionError,
} from './financeActions';
import { getToken } from '../session/sessionSelectors';

export const postTransaction = transaction => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(postTransactionRequest());
  const {
    type,
    amount,
    category,
    date,
    comments,
    balanceAfter,
    typeBalanceAfter,
  } = transaction;
  return axios
    .post(
      'https://mywallet.goit.co.ua/api/finance',
      {
        type,
        amount,
        category,
        date,
        comments,
        balanceAfter,
        typeBalanceAfter,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(dispatch(postTransactionSuccesss(transaction)))
    .catch(error => dispatch(postTransactionError(error)));
};

export const getTransactions = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;

  dispatch(getTransactionRequest());

  axios
    .get('https://mywallet.goit.co.ua/api/finance', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response =>
      dispatch(getTransactionSuccesss(response.data.finance.data)),
    )
    .catch(error => dispatch(getTransactionError(error)));
};
