import PropTypes from 'prop-types';
import styles from './styles.scss';

const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Card;
