import PropTypes from 'prop-types';

export const skillShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number,
});

export const projectShape = PropTypes.shape({
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  inspiredBy: PropTypes.string,
  assets: PropTypes.string,
  contact: PropTypes.object,
  location: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
});
