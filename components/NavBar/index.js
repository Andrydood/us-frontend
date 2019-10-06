import Link from 'next/link';

const NavBar = () => (
  <div>
    <Link href="/"><a>Browse</a></Link>
    <Link href="/profile"><a>Profile</a></Link>
    <Link href="/favorites"><a>Favorites</a></Link>
  </div>
);


export default NavBar;
