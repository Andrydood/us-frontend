import _ from 'lodash';
import { SET_PROJECT_DATA } from '~store/projectPage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getProjectData = projectId => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token && projectId) {
    request.project(projectId, token).then((project) => {
      dispatch({ type: SET_PROJECT_DATA, payload: { name: project.name, projectId } });
    }).catch((err) => {
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};
