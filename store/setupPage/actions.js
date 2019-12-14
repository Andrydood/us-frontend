import _ from 'lodash';
import {
  COMPLETE_INITIAL_SETUP,
} from '~store/authentication/actionTypes';
import request from '~lib/request';
import { saveToken } from '~lib/authentication';

export const setupAccount = ({
  bio,
  location,
  skillIds,
}) => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    request.setupAccount({
      bio,
      location,
      skillIds,
    }, token).then(({ token: newToken }) => {
      saveToken(newToken);
      dispatch({ type: COMPLETE_INITIAL_SETUP });
      console.log({ newToken });
      window.location.href = '/browse';
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }
};
