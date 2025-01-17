import PropTypes from 'prop-types';

export const messageShape = PropTypes.shape({
  username: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  read: PropTypes.bool,
  id: PropTypes.number,
});

export const skillShape = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number,
});

export const locationShape = PropTypes.shape({
  label: PropTypes.string,
  placeId: PropTypes.string,
  coordinates: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
});

export const projectShape = PropTypes.shape({
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  inspiredBy: PropTypes.string,
  assets: PropTypes.string,
  contact: PropTypes.object,
  location: locationShape,
  createdAt: PropTypes.string,
  likes: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
});

export const conversationShape = PropTypes.shape({
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.string,
  updatedAt: PropTypes.string,
  unread: PropTypes.number,
});
