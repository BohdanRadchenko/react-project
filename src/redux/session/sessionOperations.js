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
} from './sessionActions';
import { getToken } from './sessionSelectors';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api/';

// const setAuthToken = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthToken = () => {
//   axios.defaults.header.common.Authorization = null;
// };

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

export const refreshUser = credendials => (dispatch, getState) => {
  dispatch(refreshUserRequest());

  const token = getToken(getState());

  console.log(token);

  return axios
    .post('https://mywallet.goit.co.ua/api/login', credendials)
    .then(console.log)
    .catch(console.log);
};

// const isToken = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const signOut = token => {
//   return axios
//     .get('https://mywallet.goit.co.ua/api/logout', isToken(token))
//     .then(({ data, status }) => {

//         return data;

//       // console.log(error);
//     })
//     .catch(error => console.log(error.response.data));
// };
