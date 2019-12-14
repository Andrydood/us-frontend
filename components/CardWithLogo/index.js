import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '~components/Card';
import LogoIcon from '~lib/static/logo.svg';
import styles from './styles.scss';

const CardWithLogo = ({ children, className }) => (
  <Card className={classnames(styles.card, className)}>
    <div className={styles.logoContainer}><LogoIcon className={styles.logo} /></div>
    {children}
  </Card>
);

CardWithLogo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

CardWithLogo.defaultProps = {
  className: null,
};

export default CardWithLogo;
