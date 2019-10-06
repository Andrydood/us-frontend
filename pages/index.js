import AuthenticationWrapper from '~components/AuthenticationWrapper/BrowsePageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/BrowsePageContainer';

const Browse = () => (
  <AuthenticationWrapper>
    <NavigationWrapper>
      <ProjectList />
    </NavigationWrapper>
  </AuthenticationWrapper>
);

export default Browse;
