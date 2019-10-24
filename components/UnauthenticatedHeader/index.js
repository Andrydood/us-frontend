import Link from 'next/link';

const UnauthenticatedHeader = () => (
  <div>
    <Link href="/login"><a>Log In</a></Link>
    <Link href="/signup"><a>Sign Up</a></Link>
  </div>
);


export default UnauthenticatedHeader;
