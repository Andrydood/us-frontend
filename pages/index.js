import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import ProjectList from '~components/ProjectList/Container';

const Index = () => (
  <AuthenticationWrapper>
    <ProjectList />
  </AuthenticationWrapper>
);

export default Index;
