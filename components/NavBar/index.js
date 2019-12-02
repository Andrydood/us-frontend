import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import {
  Home,
  User,
  Heart,
  Plus,
} from 'react-feather';
import Link from '~components/Link/Container';
import styles from './styles.scss';
import pageTypes from '~lib/pageTypes';

const NavBar = ({ username, currentPage }) => (
  <div className={styles.navBar}>
    <Link href="/browse" pageType={pageTypes.browse} className={styles.link}>
      <Home
        size={30}
        className={
          classnames(styles.icon, { [styles.activeIcon]: currentPage === pageTypes.browse })
        }
      />
    </Link>
    <Link href="/user/[username]" as={`/user/${username}`} pageType={pageTypes.profile} className={styles.link}>
      <User
        size={30}
        className={
          classnames(styles.icon, { [styles.activeIcon]: currentPage === pageTypes.profile })
        }
      />
    </Link>
    <Link href="/favorites" pageType={pageTypes.favorites} className={styles.link}>
      <Heart
        size={30}
        className={
          classnames(styles.icon, { [styles.activeIcon]: currentPage === pageTypes.favorites })
        }
      />
    </Link>
    <Link href="/new-project" pageType={pageTypes.newProject} className={styles.link}>
      <Plus
        size={30}
        className={
          classnames(styles.icon, { [styles.activeIcon]: currentPage === pageTypes.newProject })
        }
      />
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
