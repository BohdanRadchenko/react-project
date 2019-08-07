/* eslint-disable */
import axios from 'axios';
import {
  postTransactionRequest,
  postTransactionSuccesss,
  postTransactionError,
} from './financeActions';

const postTransaction = (transaction, token) => dispatch => {
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
        // date,
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
    .then(response => {
      console.log(response.data);
      dispatch(postTransactionSuccesss(transaction));
    })
    .catch(error => dispatch(postTransactionError(error)));
};

export default postTransaction;
