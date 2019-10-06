import AuthenticationWrapper from '~components/AuthenticationWrapper/FavoritesPageContainer';
import ProjectList from '~components/ProjectList/FavoritesPageContainer';
import Header from '~components/Header/Container';

const Favorites = () => (
  <AuthenticationWrapper>
    <Header />
    <ProjectList />
  </AuthenticationWrapper>
);

export default Favorites;
