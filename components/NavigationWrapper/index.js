import PropTypes from 'prop-types';
import Header from '~components/Header/Container';
import NavBar from '~components/NavBar/Container';
import useMessages from '~hooks/useMessages';
import styles from './styles.scss';

const NavigationWrapper = ({ children, allowUseMessages, prefetchMessagesData }) => {
  if (allowUseMessages) {
    useMessages({ prefetchMessagesData });
  }

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        { children }
      </div>
      <NavBar />
    </div>
  );
};

NavigationWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  allowUseMessages: PropTypes.bool,
  prefetchMessagesData: PropTypes.bool,
};

NavigationWrapper.defaultProps = {
  allowUseMessages: true,
  prefetchMessagesData: true,
};

export default NavigationWrapper;
