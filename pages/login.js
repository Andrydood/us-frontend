import LoginForm from '~components/LoginForm/Container';
import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';

const Login = () => (
  <AuthenticationWrapper>
    <LoginForm />
  </AuthenticationWrapper>
);

export default Login;
