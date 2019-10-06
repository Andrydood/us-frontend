import _ from 'lodash';
import { SET_FAVORITES_LIST } from '~store/favoritesPage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getFavoriteProjects = () => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token) {
    request.favorites(token).then((projects) => {
      // TODO: WHY THE FUCK IS THIS A STRING
      dispatch({ type: SET_FAVORITES_LIST, payload: { projects: JSON.parse(projects) } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};
