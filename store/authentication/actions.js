import _ from 'lodash';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '~store/authentication/actionTypes';
import { TOKEN_KEY } from '~lib/authentication';
import request from '~lib/request';

export const logOut = () => (dispatch) => {
  window.localStorage.removeItem(TOKEN_KEY);
  dispatch({ type: LOGOUT_SUCCESS });
  window.location.href = '/login';
};


export const authenticateFromToken = redirectOnFail => async (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, authenticationDate, token: oldToken } = _.get(state, 'authentication');

  if (!isAuthenticated || ((new Date() - new Date(authenticationDate)) > 900000)) {
    const token = oldToken || window.localStorage.getItem(TOKEN_KEY);

    if (token) {
      try {
        dispatch({ type: LOGIN_REQUEST });
        const { token: newToken } = await request.refreshToken(token);
        window.localStorage.setItem(TOKEN_KEY, newToken);

        const { id: userId, username, initialSetupIsComplete } = JSON.parse(atob(token.split('.')[1]));

        return dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            token: newToken,
            userId,
            username,
            authenticationDate: new Date(),
            initialSetupIsComplete,
          },
        });
      } catch (err) {
        dispatch({ type: LOGIN_FAILURE });
        return dispatch(logOut());
      }
    }

    dispatch({ type: LOGIN_FAILURE });
    if (redirectOnFail) {
      window.location.href = '/login';
    }
    return null;
  }

  return null;
};


export const redirectOnIncompleteSetup = () => async (dispatch, getState) => {
  const state = getState();
  const { initialSetupIsComplete } = _.get(state, 'authentication');

  if (!initialSetupIsComplete) {
    window.location.href = '/setup';
  }
};
