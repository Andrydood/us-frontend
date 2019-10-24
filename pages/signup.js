import SignupForm from '~components/SignupForm/Container';
import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/SignupPageContainer';

const Login = () => (
  <AuthenticationWrapper>
    <DataWrapper>
      <SignupForm />
    </DataWrapper>
  </AuthenticationWrapper>
);

export default Login;
