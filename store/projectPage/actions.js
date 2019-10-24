import _ from 'lodash';
import { SET_PROJECT_DATA } from '~store/projectPage/actionTypes';
import request from '~lib/request';

export const getProjectData = projectId => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token && projectId) {
    request.project(projectId, token).then((project) => {
      dispatch({ type: SET_PROJECT_DATA, payload: { project } });
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
