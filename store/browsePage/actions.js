import _ from 'lodash';
import { SET_BROWSE_LIST, DATA_REQUEST } from '~store/browsePage/actionTypes';
import request from '~lib/request';

export const getBrowseProjects = () => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    request.browse(token).then(({ projects }) => {
      dispatch({ type: SET_BROWSE_LIST, payload: { projects } });
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
