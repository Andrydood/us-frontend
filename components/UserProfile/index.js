import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';
import styles from './styles.scss';

const UserProfile = ({
  username,
  bio,
  location,
  skills,
}) => (
  <div className={styles.profile}>
    {JSON.stringify(username)}
    {JSON.stringify(bio)}
    {JSON.stringify(location)}
    {JSON.stringify(skills)}
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
