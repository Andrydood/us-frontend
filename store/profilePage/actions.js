import _ from 'lodash';
import { SET_USER_DATA, SET_USER_PROJECTS } from '~store/profilePage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getUserData = username => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token) {
    request.profile(username, token).then((userData) => {
      dispatch({ type: SET_USER_DATA, payload: { userData } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};

export const getUserProjects = username => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token) {
    request.userProjects(username, token).then(({ projects }) => {
      dispatch({ type: SET_USER_PROJECTS, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};


export const getProfileData = username => (dispatch) => {
  dispatch(getUserData(username));
  dispatch(getUserProjects(username));
};
