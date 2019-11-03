import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/FavoritesPageContainer';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getFavoriteProjects } from '~store/favoritesPage/actions';
import pageTypes from '~lib/pageTypes';

const Favorites = () => {
  usePageType(pageTypes.favorites);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: getFavoriteProjects,
  });

  return (
    <NavigationWrapper>
      <ProjectList />
    </NavigationWrapper>
  );
};

export default Favorites;
