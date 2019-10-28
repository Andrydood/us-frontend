import _ from 'lodash';
import {
  SET_PROJECT_DATA,
  DATA_REQUEST,
  IS_FAVORITE_REQUEST,
  SET_IS_FAVORITE,
} from '~store/projectPage/actionTypes';
import request from '~lib/request';

export const getProjectData = projectId => async (dispatch, getState) => {
  const state = getState();
  const { token, username } = _.get(state, 'authentication');

  if (token && projectId) {
    try {
      dispatch({ type: DATA_REQUEST });
      const project = await request.project(projectId, token);
      const { isFavorite } = await request.isFavorite(projectId, token);
      const isOwner = project.owner === username;
      dispatch({ type: SET_PROJECT_DATA, payload: { project, isFavorite, isOwner } });
    } catch (err) {
      console.log('Error: ', err);
      window.location.href = '/404';
    }
  }
};

export const deleteProject = projectId => async (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token && projectId) {
    try {
      dispatch({ type: DATA_REQUEST });
      await request.deleteProject(projectId, token);
      window.location.href = '/browse';
    } catch (err) {
      console.log('Error: ', err);
      window.location.href = '/404';
    }
  }
};

export const toggleFavoriteProject = projectId => async (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');
  const { isFavorite } = _.get(state, 'projectPage');
  if (token && projectId) {
    try {
      dispatch({ type: IS_FAVORITE_REQUEST });

      if (isFavorite) {
        await request.unFavoriteProject(projectId, token);
      } else {
        await request.favoriteProject(projectId, token);
      }
      const { isFavorite: newIsFavorite } = await request.isFavorite(projectId, token);

      dispatch({ type: SET_IS_FAVORITE, payload: { isFavorite: newIsFavorite } });
    } catch (err) {
      console.log('Error: ', err);
      window.location.href = '/404';
    }
  }
};
