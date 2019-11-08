import PropTypes from 'prop-types';
import Link from '~components/Link';
import pageTypes from '~lib/pageTypes';
import styles from './styles.scss';
import logo from '~lib/static/logo.svg';

const Header = ({ onClickLogout, currentPage, profileUsername }) => {
  let pageTitle = '';

  switch (currentPage) {
    case pageTypes.browse:
      pageTitle = 'Browse';
      break;
    case pageTypes.profile:
      pageTitle = profileUsername;
      break;
    case pageTypes.favorites:
      pageTitle = 'Favorites';
      break;
    case pageTypes.newProject:
      pageTitle = 'New Project';
      break;
    case pageTypes.project:
      pageTitle = 'Project';
      break;
    default:
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/browse" pageType={pageTypes.browse} className={styles.homeLink}><img src={logo} alt="home" className={styles.logo} /></Link>
        <div className={styles.pageTitleContainer}>
          <span className={styles.pageTitle}>{pageTitle}</span>
        </div>
        <button onClick={onClickLogout} type="button" className={styles.logOut}> Log Out</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
  profileUsername: PropTypes.string,
};

Header.defaultProps = {
  currentPage: '',
  profileUsername: '-',
};

export default Header;
