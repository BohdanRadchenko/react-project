import axios from 'axios';
import {
  postTransactionRequest,
  postTransactionSuccesss,
  postTransactionError,
} from './financeActions';
import headers from '../../assets/json/financeHeaders.json';

const id = '5d497be8c547022d6a641dee';

const postTransaction = transaction => dispatch => {
  dispatch(postTransactionRequest());
  const transactionToPost = {
    ...transaction,
    test: 'test',
  };
  axios
    .post(
      `https://mywallet.goit.co.ua/api/finance/${id}`,
      transactionToPost,
      JSON.stringify(headers),
    )
    .then(dispatch(postTransactionSuccesss(transactionToPost)))
    .catch(error => dispatch(postTransactionError(error)));
};

export default postTransaction;
