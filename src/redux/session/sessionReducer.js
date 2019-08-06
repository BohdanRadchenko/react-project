import { combineReducers } from 'redux';
import { ActionTypes, TypeName } from './sessionActions';

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.user;

    case TypeName.LOGOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.token;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_UP_ERROR:
    case ActionTypes.SIGN_IN_ERROR:
      return payload.error.message;

    case ActionTypes.SIGN_IN_SUCCESS:
    case ActionTypes.SIGN_UP_SUCCESS:
      return null;

    default:
      return state;
  }
};

const authentificated = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return true;

    default:
      return state;
  }
};

const getUser = (state = {}, { type, payload }) => {
  switch (type) {
    case TypeName.GET_USER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  authentificated,
  getUser,
});
