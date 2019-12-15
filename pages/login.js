import { Fragment } from 'react';
import LoginForm from '~components/LoginForm';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useRedirectToBrowseOnAuthentication from '~hooks/useRedirectToBrowseOnAuthentication';
import pageTypes from '~lib/pageTypes';

const Login = () => {
  usePageType(pageTypes.login);
  useAuthentication();
  useRedirectToBrowseOnAuthentication();

  return (
    <Fragment>
      <LoginForm />
    </Fragment>
  );
};

export default Login;
