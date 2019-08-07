export const ActionTypes = {
  SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
  SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',
};

export const TypeName = {
  GET_USER: 'GET_USER',
  LOGOUT_SUCCESS: 'session/LOGOUT_SUCCESS',
};

//
//  Sign UP
//

export const signUpRequest = () => ({
  type: ActionTypes.SIGN_UP_REQUEST,
});

export const signUpSuccesss = response => ({
  type: ActionTypes.SIGN_UP_SUCCESS,
  payload: { response },
});

export const signUpError = error => ({
  type: ActionTypes.SIGN_UP_ERROR,
  payload: { error },
});

//
//  SignIN
//

export const signInRequest = () => ({
  type: ActionTypes.SIGN_IN_REQUEST,
});

export const signInSuccesss = response => ({
  type: ActionTypes.SIGN_IN_SUCCESS,
  payload: { response },
});

export const signInError = error => ({
  type: ActionTypes.SIGN_IN_ERROR,
  payload: { error },
});

//
// LogOUT
//

export const logOut = () => ({
  type: TypeName.LOGOUT_SUCCESS,
});

//
// refresh user
//

export const refreshUserRequest = () => ({
  type: ActionTypes.REFRESH_USER_SUCCESS,
});

export const refreshUserSuccess = response => ({
  type: ActionTypes.REFRESH_USER_SUCCESS,
  payload: { response },
});

export const refreshUserError = error => ({
  type: ActionTypes.REFRESH_USER_ERROR,
  payload: { error },
});
