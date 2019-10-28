import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';

const UserProfile = ({
  username,
  bio,
  location,
  skills,
}) => (
  <div>
    <h1>{JSON.stringify({ username })}</h1>
    <h1>{JSON.stringify({ bio })}</h1>
    <h1>{JSON.stringify({ location })}</h1>
    <h1>{JSON.stringify(skills)}</h1>
  </div>
);

UserProfile.propTypes = {
  username: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  skills: PropTypes.arrayOf(skillShape),
};

UserProfile.defaultProps = {
  username: null,
  bio: null,
  location: null,
  skills: [],
};

export default UserProfile;
