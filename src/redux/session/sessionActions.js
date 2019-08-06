export const ActionTypes = {
  SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
  SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
};

export const TypeName = {
  GET_USER: 'GET_USER',
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

// Get User Name

export const getUser = user => ({
  type: TypeName.GET_USER,
  payload: user,
});
