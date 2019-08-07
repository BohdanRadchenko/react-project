/* eslint-disable no-console */
import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
} from './sessionActions';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api/';

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

// export const requestUserLogin = credendials => {
//   return axios
//     .post('https://mywallet.goit.co.ua/api/login', credendials)
//     .then(data => data)
//     .catch(({ response }) => response);
// };

// const isToken = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const headersDefault = () => {
//   axios.defaults.headers.common.Autorization === null;
// };

// export const signOut = token => {
//   return axios
//     .get('https://mywallet.goit.co.ua/api/logout', isToken(token))
//     .then(({ data, status }) => {

//         return data;

//       // console.log(error);
//     })
//     .catch(error => console.log(error.response.data));
// };
