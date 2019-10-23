import SignupForm from '~components/SignupForm/Container';
import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';

const Login = () => (
  <AuthenticationWrapper>
    <SignupForm />
  </AuthenticationWrapper>
);

export default Login;
