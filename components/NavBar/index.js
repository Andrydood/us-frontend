import Link from 'next/link';
import { PropTypes } from 'prop-types';

const NavBar = ({ username }) => (
  <div>
    <Link href="/"><a>Browse</a></Link>
    <Link href={`/user/${username}`}><a>Profile</a></Link>
    <Link href="/favorites"><a>Favorites</a></Link>
  </div>
);

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
};


export default NavBar;
