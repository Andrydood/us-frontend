import _ from 'lodash';
import { FILL_PROFILE_PAGE } from '~store/profilePage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getProfileData = () => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token, userId } = _.get(state, 'authentication');

  if (isAuthenticated && token && userId) {
    request.profile(userId, token).then(({ projects }) => {
      console.log(projects)
      dispatch({ type: FILL_PROFILE_PAGE, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};
