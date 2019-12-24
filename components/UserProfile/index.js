import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { skillShape } from '~lib/shapes';
import Card from '~components/Card';
import SkillBubble from '~components/SkillBubble';
import LoadingWrapper from '~components/LoadingWrapper';
import styles from './styles.scss';

const UserProfile = ({
  username,
  bio,
  location,
  skills,
  isFetchingUserData,
}) => (
  <LoadingWrapper isLoading={isFetchingUserData}>
    <Card>
      <div className={styles.name}>{username}</div>
      <div className={styles.location}>{location}</div>
      {bio ? (
        <Fragment>
          <div className={styles.header}>About Me</div>
          <div className={styles.text}>{bio}</div>
        </Fragment>
      ) : null}
      {skills ? (
        <Fragment>
          <div className={styles.header}>Skills</div>
          <div className={styles.skills}>
            {skills.map(skill => <SkillBubble name={skill.name} id={skill.id} key={skill.id} />)}
          </div>
        </Fragment>
      ) : null}
    </Card>
  </LoadingWrapper>
);

UserProfile.propTypes = {
  username: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  skills: PropTypes.arrayOf(skillShape),
  isFetchingUserData: PropTypes.bool,
};

UserProfile.defaultProps = {
  username: null,
  bio: null,
  location: null,
  skills: [],
  isFetchingUserData: true,
};

export default UserProfile;
