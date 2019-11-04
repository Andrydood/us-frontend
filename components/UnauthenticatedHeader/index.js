import Link from '~components/Link';
import pageTypes from '~lib/pageTypes';

const UnauthenticatedHeader = () => (
  <div>
    <Link href="/login" pageType={pageTypes.login}>Log In</Link>
    <Link href="/signup" pageType={pageTypes.signup}>Sign Up</Link>
  </div>
);


export default UnauthenticatedHeader;
