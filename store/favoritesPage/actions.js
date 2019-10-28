import _ from 'lodash';
import { SET_FAVORITES_LIST, DATA_REQUEST } from '~store/favoritesPage/actionTypes';
import request from '~lib/request';

export const getFavoriteProjects = () => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    request.favorites(token).then(({ projects }) => {
      dispatch({ type: SET_FAVORITES_LIST, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
