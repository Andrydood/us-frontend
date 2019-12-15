import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const SkillBubble = ({ name, id, onClick }) => (onClick
  ? <div role="button" tabIndex="0" onKeyPress={onClick} onClick={onClick} className={classnames(styles.bubble, styles.button, styles[`id-${id}`])}>{name}</div>
  : <div className={classnames(styles.bubble, styles[`id-${id}`])}>{name}</div>);

SkillBubble.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

SkillBubble.defaultProps = {
  onClick: null,
};


export default SkillBubble;
