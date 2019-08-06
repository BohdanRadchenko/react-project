export const transactionActionTypes = {
  POST_TRANSACTION_REQUEST: 'POST_TRANSACTION_REQUEST',
  POST_TRANSACTION_SUCCESS: 'POST_TRANSACTION_SUCCESS',
  POST_TRANSACTION_ERROR: 'POST_TRANSACTION_ERROR',

  GET_TRANSACTION_REQUEST: 'GET_TRANSACTION_REQUEST',
  GET_TRANSACTION_SUCCESS: 'GET_TRANSACTION_SUCCESS',
  GET_TRANSACTION_ERROR: 'GET_TRANSACTION_ERROR',
};

// POST TRANSACTION

export const postTransactionRequest = () => ({
  type: transactionActionTypes.POST_TRANSACTION_REQUEST,
});

export const postTransactionSuccesss = transaction => ({
  type: transactionActionTypes.POST_TRANSACTION_SUCCESS,
  payload: { transaction },
});

export const postTransactionError = error => ({
  type: transactionActionTypes.POST_TRANSACTION_ERROR,
  payload: { error },
});

// GET FINANCE

export const getTransactionRequest = () => ({
  type: transactionActionTypes.GET_TRANSACTION_REQUEST,
});

export const getTransactionSuccesss = response => ({
  type: transactionActionTypes.GET_TRANSACTION_SUCCESS,
  payload: { response },
});

export const getTransactionError = error => ({
  type: transactionActionTypes.GET_TRANSACTION_ERROR,
  payload: { error },
});
