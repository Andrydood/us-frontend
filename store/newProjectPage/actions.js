import _ from 'lodash';
import request from '~lib/request';

export const createProject = ({
  name,
  description,
  inspiredBy,
  assets,
  location,
  skillsNeeded,
}) => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    request.createProject({
      name,
      description,
      inspiredBy,
      assets,
      location,
      skillsNeeded,
    }, token).then(({ id }) => {
      window.location.href = `/project/${id}`;
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
