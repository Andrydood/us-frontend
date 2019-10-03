import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '~store/authentication/actionTypes';

import request from '~lib/request';

const TOKEN_KEY = 'token';

export const authenticateFromToken = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  if (window) {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      return dispatch({ type: LOGIN_SUCCESS, payload: { token } });
    }
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    return dispatch({ type: LOGIN_FAILURE });
  }
  return dispatch({ type: LOGIN_FAILURE });
};

export const authenticateFromInput = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  request.login(email, password)
    .then(({ token }) => {
      if (window) {
        window.localStorage.setItem(TOKEN_KEY, token);
        window.location.href = '/';
        return dispatch({ type: LOGIN_SUCCESS, payload: { token } });
      }
      return Error('Window object missing');
    })
    .catch(() => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
