import request from '~lib/request';

export const createProject = ({
  name,
  description,
  inspiredBy,
  assets,
  locationId,
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
      locationId,
      skillsNeeded,
    }, token).then(({ id }) => {
      window.location.href = `/project/${id}`;
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};
