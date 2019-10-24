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


export const authenticateFromToken = () => async (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST });

  const token = window.localStorage.getItem(TOKEN_KEY);

  if (token) {
    try {
      const state = getState();
      const { authenticationDate: oldAuthenticationDate } = _.get(state, 'authentication');

      let newToken = token;

      if ((new Date() - new Date(oldAuthenticationDate)) > 900000) {
        const response = await request.refreshToken(token);
        newToken = response.token;
      }

      const { id: userId, username } = JSON.parse(atob(token.split('.')[1]));
      const authenticationDate = new Date();
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          token: newToken,
          userId,
          username,
          authenticationDate,
        },
      });
    } catch (err) {
      console.log('Token not valid');
      dispatch(logOut());
    }
  }
  return dispatch({ type: LOGIN_FAILURE });
};
