import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.scss';

const Card = ({ children, className }) => (
  <div className={classnames(styles.card, className)}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: null,
};

export default Card;
