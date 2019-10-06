import AuthenticationWrapper from '~components/AuthenticationWrapper/BrowsePageContainer';
import ProjectList from '~components/ProjectList/BrowsePageContainer';
import Header from '~components/Header/Container';

const Browse = () => (
  <AuthenticationWrapper>
    <Header />
    <ProjectList />
  </AuthenticationWrapper>
);

export default Browse;
