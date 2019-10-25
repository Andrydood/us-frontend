import _ from 'lodash';
import { SET_FAVORITES_LIST, DATA_REQUEST } from '~store/favoritesPage/actionTypes';
import request from '~lib/request';

export const getFavoriteProjects = () => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token) {
    dispatch({ type: DATA_REQUEST });
    request.favorites(token).then(({ projects }) => {
      dispatch({ type: SET_FAVORITES_LIST, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
