import { Fragment } from 'react';
import LoginForm from '~components/LoginForm/Container';
import UnauthenticatedHeader from '~components/UnauthenticatedHeader';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import pageTypes from '~lib/pageTypes';

const Login = () => {
  usePageType(pageTypes.login);
  useAuthentication();

  return (
    <Fragment>
      <UnauthenticatedHeader />
      <LoginForm />
    </Fragment>
  );
};

export default Login;
