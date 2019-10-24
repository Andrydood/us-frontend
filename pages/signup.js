import SignupForm from '~components/SignupForm/Container';
import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/AttributesContainer';
import UnauthenticatedHeader from '~components/UnauthenticatedHeader';

const Login = () => (
  <AuthenticationWrapper>
    <DataWrapper>
      <UnauthenticatedHeader />
      <SignupForm />
    </DataWrapper>
  </AuthenticationWrapper>
);

export default Login;
