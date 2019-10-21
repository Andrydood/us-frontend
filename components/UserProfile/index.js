import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';

const UserProfile = ({
  username,
  firstName,
  lastName,
  bio,
  location,
  skills,
}) => (
  <div>
    <h1>{username}</h1>
    <h1>{firstName}</h1>
    <h1>{lastName}</h1>
    <h1>{bio}</h1>
    <h1>{location}</h1>
    <h1>{JSON.stringify(skills)}</h1>
  </div>
);

UserProfile.propTypes = {
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  skills: PropTypes.arrayOf(skillShape),
};

UserProfile.defaultProps = {
  username: null,
  firstName: null,
  lastName: null,
  bio: null,
  location: null,
  skills: [],
};

export default UserProfile;
