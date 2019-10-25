import _ from 'lodash';
import { SET_PROJECT_DATA, DATA_REQUEST } from '~store/projectPage/actionTypes';
import request from '~lib/request';

export const getProjectData = projectId => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token && projectId) {
    dispatch({ type: DATA_REQUEST });
    request.project(projectId, token).then((project) => {
      dispatch({ type: SET_PROJECT_DATA, payload: { project } });
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
