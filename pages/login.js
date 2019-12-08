import { Fragment } from 'react';
import LoginForm from '~components/LoginForm/Container';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import pageTypes from '~lib/pageTypes';

const Login = () => {
  usePageType(pageTypes.login);
  useAuthentication();

  return (
    <Fragment>
      <LoginForm />
    </Fragment>
  );
};

export default Login;
