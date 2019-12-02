import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const SkillBubble = ({ name, id }) => (
  <div className={classnames(styles.bubble, styles[`id-${id}`])}>{name}</div>
);

SkillBubble.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SkillBubble;
