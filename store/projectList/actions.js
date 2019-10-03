import _ from 'lodash';
import { FILL_LIST } from '~store/projectList/actionTypes';
import request from '~lib/request';

export const getProjectList = () => (dispatch, getState) => {
  const state = getState();
  const token = _.get(state, ['authentication', 'token']);

  request.browse(token).then((projects) => {
    dispatch({ type: FILL_LIST, payload: { projects } });
  });
};
