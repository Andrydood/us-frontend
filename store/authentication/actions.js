import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '~store/authentication/actionTypes';

import request from '~lib/request';

export const authenticateLogin = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST, payload: { message: 'Logging In' } });

  request.login(email, password)
    .then(({ token }) => {
      dispatch({ type: LOGIN_SUCCESS, payload: { message: 'Logged In', token } });
    })
    .catch(({ detail }) => {
      dispatch({ type: LOGIN_FAILURE, payload: { message: detail } });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS, payload: { message: 'Logged Out' } });
};
