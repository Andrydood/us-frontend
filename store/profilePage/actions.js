import _ from 'lodash';
import { SET_PROFILE_DATA } from '~store/profilePage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getProfileData = () => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token, userId } = _.get(state, 'authentication');

  if (isAuthenticated && token && userId) {
    request.profile(userId, token).then(({ projects }) => {
      dispatch({ type: SET_PROFILE_DATA, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};
