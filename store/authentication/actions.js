import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '~store/authentication/actionTypes';

import { TOKEN_KEY } from '~lib/authentication';

export const authenticateFromToken = () => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  if (window) {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      const { id: userId, username } = JSON.parse(atob(token.split('.')[1]));
      return dispatch({ type: LOGIN_SUCCESS, payload: { token, userId, username } });
    }
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    return dispatch({ type: LOGIN_FAILURE });
  }
  return dispatch({ type: LOGIN_FAILURE });
};

export const logOut = () => (dispatch) => {
  window.localStorage.removeItem(TOKEN_KEY);
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.href = '/login';
};
