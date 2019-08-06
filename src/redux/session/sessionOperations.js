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

// const setToken = token => ({
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

// export const clearHeader = () => {
//   axios.defaults.headers.common.Autorization === null;
// };

// export const signOut = token => {
//   return axios
//     .get('https://mywallet.goit.co.ua/api/auth/logout', setToken(token))
//     .then(({ data, status }) => {
//       if (status === 200) {
//         return data;
//       }
//     })
//     // .catch(error => console.log(error));
// };
