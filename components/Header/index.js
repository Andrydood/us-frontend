import PropTypes from 'prop-types';
import Link from '~components/Link';
import pageTypes from '~lib/pageTypes';
import styles from './styles.scss';
import logo from '~lib/static/logo.svg';

const Header = ({ onClickLogout }) => (
  <div className={styles.headerContainer}>
    <div className={styles.header}>
      <Link href="/browse" pageType={pageTypes.browse} className={styles.homeLink}><img src={logo} alt="home" className={styles.logo} /></Link>
      <button onClick={onClickLogout} type="button" className={styles.logOut}> Log Out</button>
    </div>
  </div>
);

Header.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
};

export default Header;
