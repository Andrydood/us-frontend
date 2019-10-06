import _ from 'lodash';
import { FILL_BROWSE_LIST } from '~store/browsePage/actionTypes';
import { logOut } from '~store/authentication/actions';
import request from '~lib/request';

export const getBrowseProjects = () => (dispatch, getState) => {
  const state = getState();
  const { isAuthenticated, token } = _.get(state, 'authentication');

  if (isAuthenticated && token) {
    request.browse(token).then((projects) => {
      dispatch({ type: FILL_BROWSE_LIST, payload: { projects } });
    }).catch((err) => {
      //TODO: Add logger
      console.log('Error: ', err);
      dispatch(logOut());
    });
  } else {
    dispatch(logOut());
  }
};
