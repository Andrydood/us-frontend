import PropTypes from 'prop-types';
import { Menu } from 'react-feather';
import Link from '~components/Link';
import pageTypes from '~lib/pageTypes';
import styles from './styles.scss';
import LogoIcon from '~lib/static/logo.svg';

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
        <Link href="/browse" pageType={pageTypes.browse} className={styles.logoContainer}><LogoIcon className={styles.logo} /></Link>
        <span className={styles.pageTitle}>{pageTitle}</span>
        <button onClick={onClickLogout} className={styles.menuIconContainer} type="button">
          <Menu className={styles.menuIcon} size="28" />
        </button>
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
