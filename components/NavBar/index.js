import Link from 'next/link';
import { PropTypes } from 'prop-types';

const NavBar = ({ username }) => (
  <div>
    <Link href="/browse"><a>Browse</a></Link>
    <Link href={`/user/${username}`}><a>Profile</a></Link>
    <Link href="/favorites"><a>Favorites</a></Link>
    <Link href="/new-project"><a>New Project</a></Link>
  </div>
);

NavBar.propTypes = {
  username: PropTypes.string,
};

NavBar.defaultProps = {
  username: '',
};

export default NavBar;
