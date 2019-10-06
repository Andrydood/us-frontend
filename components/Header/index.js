import PropTypes from 'prop-types';
import Link from 'next/link';

const Header = ({ onClickLogout }) => (
  <div>
    <Link href="/"><a>Home</a></Link>
    <button onClick={onClickLogout} type="button"> Log Out</button>
  </div>
);

Header.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
};

export default Header;
