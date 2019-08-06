import { combineReducers } from 'redux';
import { ActionTypes } from './sessionActions';

const user = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.response.user;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_IN_SUCCESS:
      return payload.token;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.SIGN_UP_ERROR:
      return payload.erorr;

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

export default combineReducers({
  user,
  token,
  error,
  authentificated,
});
