import { SET_ATTRIBUTES } from '~store/attributes/actionTypes';
import request from '~lib/request';

export const getAttributes = () => (dispatch) => {
  request.skills().then(({ skills }) => {
    dispatch({ type: SET_ATTRIBUTES, payload: { skills } });
  }).catch((err) => {
    console.log('Error: ', err);
  });
};
