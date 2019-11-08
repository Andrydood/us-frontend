import { PropTypes } from 'prop-types';
import Link from '~components/Link/Container';
import styles from './styles.scss';
import browseIcon from '~lib/static/home-hollow.svg';
import profileIcon from '~lib/static/user-hollow.svg';
import favoritesIcon from '~lib/static/heart-hollow.svg';
import newProjectIcon from '~lib/static/plus-hollow.svg';
import selectedBrowseIcon from '~lib/static/home-full.svg';
import selectedProfileIcon from '~lib/static/user-full.svg';
import selectedFavoritesIcon from '~lib/static/heart-full.svg';
import selectedNewProjectIcon from '~lib/static/plus-full.svg';
import pageTypes from '~lib/pageTypes';

const NavBar = ({ username, currentPage }) => (
  <div className={styles.navBar}>
    <Link href="/browse" pageType={pageTypes.browse} className={styles.link}>
      <img src={currentPage === pageTypes.browse ? selectedBrowseIcon : browseIcon} alt="home" className={styles.icon} />
      <span className={styles.description}>Home</span>
    </Link>
    <Link href="/user/[username]" as={`/user/${username}`} pageType={pageTypes.profile} className={styles.link}>
      <img src={currentPage === pageTypes.profile ? selectedProfileIcon : profileIcon} alt="home" className={styles.icon} />
      <span className={styles.description}>{username || '-'}</span>
    </Link>
    <Link href="/favorites" pageType={pageTypes.favorites} className={styles.link}>
      <img src={currentPage === pageTypes.favorites ? selectedFavoritesIcon : favoritesIcon} alt="home" className={styles.icon} />
      <span className={styles.description}>Favorites</span>
    </Link>
    <Link href="/new-project" pageType={pageTypes.newProject} className={styles.link}>
      <img src={currentPage === pageTypes.newProject ? selectedNewProjectIcon : newProjectIcon} alt="home" className={styles.icon} />
      <span className={styles.description}>New Project</span>
    </Link>
  </div>
);

NavBar.propTypes = {
  username: PropTypes.string,
  currentPage: PropTypes.string,
};

NavBar.defaultProps = {
  username: '',
  currentPage: null,
};

export default NavBar;
