/* eslint-disable */
import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
} from './sessionActions';

axios.defaults.baseURL = 'https://mywallet.goit.co.ua/api/';

export const signUp = credentials => dispath => {
  dispath(signUpRequest());
  return axios
    .post('register', credentials)
    .then(response => dispath(signUpSuccesss(response.data)))
    .catch(error => console.log(error));
};

// export const signIn = credentials => dispath => {
//   signInRequest();
// };
