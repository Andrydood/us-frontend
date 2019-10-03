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
};

const reducer = createReducer(initialState, {
  [LOGIN_REQUEST]: state => ({
    ...state,
    isFetching: true,
    isAuthenticated: false,
    token: null,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    isAuthenticated: true,
    token: payload.token,
  }),
  [LOGIN_FAILURE]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
  }),
  [LOGOUT_SUCCESS]: state => ({
    ...state,
    isFetching: false,
    isAuthenticated: false,
    token: null,
  }),
});

export default reducer;
