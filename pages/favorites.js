import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/FavoritesPageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/FavoritesPageContainer';

const Favorites = () => (
  <AuthenticationWrapper>
    <DataWrapper needsAuthentication>
      <NavigationWrapper>
        <ProjectList />
      </NavigationWrapper>
    </DataWrapper>
  </AuthenticationWrapper>
);

export default Favorites;
