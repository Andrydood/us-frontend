import { createReducer } from '~lib/redux';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  COMPLETE_INITIAL_SETUP,
} from '~store/authentication/actionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  username: null,
  userId: null,
  authenticationDate: null,
  initialSetupIsComplete: false,
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: state => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
    initialSetupIsComplete: false,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isAuthenticated: true,
    token: payload.token,
    username: payload.username,
    userId: payload.userId,
    authenticationDate: payload.authenticationDate,
    initialSetupIsComplete: payload.initialSetupIsComplete,
  }),
  [LOGIN_FAILURE]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
    authenticationDate: null,
    initialSetupIsComplete: false,
  }),
  [LOGOUT_SUCCESS]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
    authenticationDate: null,
    initialSetupIsComplete: false,
  }),
  [COMPLETE_INITIAL_SETUP]: state => ({
    ...state,
    initialSetupIsComplete: true,
  }),
});

export default reducer;
