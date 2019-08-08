/* eslint-disable no-console */
import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
  refreshUserRequest,
  logOutRequest,
  logOutSuccess,
  logOutError,
  refreshUserSuccess,
  refreshUserError,
} from './sessionActions';
import { getToken } from './sessionSelectors';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
    .post('register', credentials)
    .then(response => dispatch(signUpSuccesss(response.data)))
    .catch(error => dispatch(signUpError(error.response.data)));
};

export const signIn = credentials => dispatch => {
  dispatch(signInRequest());
  axios
    .post('login', credentials)
    .then(response => dispatch(signInSuccesss(response.data)))
    .catch(error => dispatch(signInError(error.response.data)));
};

export const refreshUser = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  setAuthToken(token);
  dispatch(refreshUserRequest());
  axios
    .get('finance', token)
    .then(response => dispatch(refreshUserSuccess(response.data)))
    .catch(error => dispatch(refreshUserError(error.message)));
};

export const signOut = () => (dispatch, getState) => {
  dispatch(logOutRequest());

  const token = getToken(getState());
  if (!token) return;
  console.log(token);
  setAuthToken(token);

  axios
    .get('logout')
    .then(() => {
      dispatch(logOutSuccess());
      clearAuthToken();
    })
    .catch(error => {
      dispatch(logOutError());
      console.log(error);
    });
};
