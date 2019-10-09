import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/BrowsePageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/BrowsePageContainer';

const Browse = () => (
  <AuthenticationWrapper>
    <DataWrapper needsAuthentication>
      <NavigationWrapper>
        <ProjectList />
      </NavigationWrapper>
    </DataWrapper>
  </AuthenticationWrapper>
);

export default Browse;
