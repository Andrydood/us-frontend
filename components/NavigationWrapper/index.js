import PropTypes from 'prop-types';
import Header from '~components/Header/Container';
import NavBar from '~components/NavBar/Container';
import styles from './styles.scss';

const NavigationWrapper = ({ children }) => (
  <div className={styles.page}>
    <Header />
    { children }
    <NavBar />
  </div>
);

NavigationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default NavigationWrapper;
