import { createReducer } from '~lib/redux';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '~store/authentication/actionTypes';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  token: null,
  message: null,
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: (state, { payload }) => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: null,
    message: payload.message,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: payload.token,
    message: payload.message,
  }),
  [LOGIN_FAILURE]: (state, { payload }) => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: null,
    message: payload.message,
  }),
  [LOGOUT_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    message: payload.message,
  }),
});

export default reducer;
