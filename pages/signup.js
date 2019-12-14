import { Fragment } from 'react';
import SignupForm from '~components/SignupForm/Container';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import pageTypes from '~lib/pageTypes';

const SignUp = () => {
  usePageType(pageTypes.signUp);
  useAuthentication();

  return (
    <Fragment>
      <SignupForm />
    </Fragment>
  );
};

export default SignUp;
