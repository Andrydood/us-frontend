import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';
import styles from './styles.scss';
import profilePicture from '~lib/static/profile-picture.jpg';
import globeIcon from '~lib/static/globe.svg';

const UserProfile = ({
  username,
  bio,
  location,
  skills,
}) => (
  <div className={styles.profile}>
    <div className={styles.pictureContainer}>
      <img src={profilePicture} className={styles.picture} alt="Profile" />
    </div>
    <div className={styles.contentWrapper}>
      <span className={styles.username}>{username}</span>
      <span className={styles.bio}>
        {bio}
      </span>
      <span className={styles.location}>
        <span><img src={globeIcon} alt="Globe" className={styles.globeIcon} /></span>
        {location}
      </span>

    </div>
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
