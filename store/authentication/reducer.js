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
  username: null,
  userId: null,
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: state => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isAuthenticated: true,
    token: payload.token,
    username: payload.username,
    userId: payload.userId,
  }),
  [LOGIN_FAILURE]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
  }),
  [LOGOUT_SUCCESS]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
    username: null,
    userId: null,
  }),
});

export default reducer;
