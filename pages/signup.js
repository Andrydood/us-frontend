import { Fragment } from 'react';
import SignupForm from '~components/SignupForm';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useRedirectToBrowseOnAuthentication from '~hooks/useRedirectToBrowseOnAuthentication';
import pageTypes from '~lib/pageTypes';

const SignUp = () => {
  usePageType(pageTypes.signUp);
  useAuthentication();
  useRedirectToBrowseOnAuthentication();

  return (
    <Fragment>
      <SignupForm />
    </Fragment>
  );
};

export default SignUp;
