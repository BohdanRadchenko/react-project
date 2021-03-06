import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInError,
  signInRequest,
  signInSuccesss,
} from './sessionActions';

const facebookMapper = credentials => ({
  email: credentials.email,
  name: credentials.name,
  password: credentials.id,
});

const googleMapper = credentials => ({
  email: credentials.profileObj.email,
  name: credentials.profileObj.name,
  password: credentials.googleId,
});

export const googleAuth = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
    .post('register', googleMapper(credentials))
    .then(response => dispatch(signUpSuccesss(response.data)))
    .catch(error => {
      if (error.response.data.message === 'Email already exists') {
        dispatch(signInRequest());
        return axios
          .post('login', googleMapper(credentials))
          .then(response => dispatch(signInSuccesss(response.data)))
          .catch(err => dispatch(signInError(err.response.data)));
      }
      return dispatch(signUpError(error.response.data));
    });
};

export const facebookAuth = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
    .post('register', facebookMapper(credentials))
    .then(response => dispatch(signUpSuccesss(response.data)))
    .catch(error => {
      if (error.response.data.message === 'Email already exists') {
        dispatch(signInRequest());
        return axios
          .post('login', facebookMapper(credentials))
          .then(response => dispatch(signInSuccesss(response.data)))
          .catch(err => dispatch(signInError(err.response.data)));
      }
      return dispatch(signUpError(error.response.data));
    });
};

// export const facebookSignUp = credentials => dispatch => {
//   dispatch(signUpRequest());
//   return axios
//     .post('register', facebookMapper(credentials))
//     .then(response => dispatch(signUpSuccesss(response.data)))
//     .catch(error => dispatch(signUpError(error.response.data)));
// };

// export const googleSignUp = credentials => dispatch => {
//   dispatch(signUpRequest());
//   return axios
//     .post('register', googleMapper(credentials))
//     .then(response => dispatch(signUpSuccesss(response.data)))
//     .catch(error => dispatch(signUpError(error.response.data)));
// };

// export const facebookSignIn = credentials => dispatch => {
//   dispatch(signInRequest());

//   axios
//     .post('login', facebookMapper(credentials))
//     .then(response => dispatch(signInSuccesss(response.data)))
//     .catch(error => dispatch(signInError(error.response.data)));
// };

// export const googleSignIn = credentials => dispatch => {
//   dispatch(signInRequest());

//   axios
//     .post('login', googleMapper(credentials))
//     .then(response => dispatch(signInSuccesss(response.data)))
//     .catch(error => dispatch(signInError(error.response.data)));
// };
