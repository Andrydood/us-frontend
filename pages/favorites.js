import AuthenticationWrapper from '~components/AuthenticationWrapper/FavoritesPageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/FavoritesPageContainer';

const Favorites = () => (
  <AuthenticationWrapper>
    <NavigationWrapper>
      <ProjectList />
    </NavigationWrapper>
  </AuthenticationWrapper>
);

export default Favorites;
