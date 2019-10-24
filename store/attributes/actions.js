import { SET_ATTRIBUTES } from '~store/attributes/actionTypes';
import request from '~lib/request';

export const getAttributes = () => (dispatch) => {
  Promise.all([
    request.locations(),
    request.skills(),
  ]).then(([{ locations }, { skills }]) => {
    dispatch({ type: SET_ATTRIBUTES, payload: { locations, skills } });
  }).catch((err) => {
    console.log('Error: ', err);
  });
};
