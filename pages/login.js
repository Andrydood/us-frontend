import LoginForm from '~components/LoginForm/Container';
import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import UnauthenticatedHeader from '~components/UnauthenticatedHeader';

const Login = () => (
  <AuthenticationWrapper>
    <UnauthenticatedHeader />
    <LoginForm />
  </AuthenticationWrapper>
);

export default Login;
