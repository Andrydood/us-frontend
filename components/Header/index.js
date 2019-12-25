import PropTypes from 'prop-types';
import { Menu, X } from 'react-feather';
import { useState } from 'react';
import classnames from 'classnames';
import Link from '~components/Link';
import pageTypes from '~lib/pageTypes';
import styles from './styles.scss';
import LogoIcon from '~lib/static/logo.svg';

const Header = ({ onClickLogout, currentPage }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  let pageTitle = '';

  switch (currentPage) {
    case pageTypes.browse:
      pageTitle = 'Browse';
      break;
    case pageTypes.profile:
      pageTitle = 'User';
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
    case pageTypes.messages:
      pageTitle = 'Messages';
      break;
    default:
  }

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Link href="/browse" pageType={pageTypes.browse} className={styles.logoContainer}><LogoIcon className={styles.logo} /></Link>
        <span className={styles.pageTitle}>{pageTitle}</span>
        <button onClick={toggleMenu} className={styles.menuIconContainer} type="button">
          <Menu className={styles.menuIcon} size="28" />
        </button>
        <div className={classnames(styles.sideMenu, { [styles.openMenu]: menuIsOpen })}>
          <button onClick={toggleMenu} className={styles.menuIconContainer} type="button">
            <X className={styles.closeIcon} size="28" />
          </button>
          <button className={styles.menuButton} onClick={onClickLogout} type="button">Log Out</button>
          <button className={styles.menuButton} onClick={() => { window.location = '/tutorial'; }} type="button">Getting Started</button>
          <button className={styles.menuButton} onClick={() => { window.location = '/help'; }} type="button">Help & Support</button>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
};

Header.defaultProps = {
  currentPage: '',
};

export default Header;
