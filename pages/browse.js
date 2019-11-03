import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/BrowsePageContainer';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import pageTypes from '~lib/pageTypes';
import { getBrowseProjects } from '~store/browsePage/actions';
import '~lib/shared.scss';

const Browse = () => {
  usePageType(pageTypes.browse);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: getBrowseProjects,
  });

  return (
    <NavigationWrapper>
      <ProjectList />
    </NavigationWrapper>
  );
};

export default Browse;
