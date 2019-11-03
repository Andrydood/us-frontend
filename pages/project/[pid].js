import { useRouter } from 'next/router';

import NavigationWrapper from '~components/NavigationWrapper';
import ProjectSummary from '~components/ProjectSummary/Container';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getProjectData } from '~store/projectPage/actions';
import pageTypes from '~lib/pageTypes';

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  usePageType(pageTypes.project);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: () => getProjectData(pid),
  });

  return (
    <NavigationWrapper>
      <ProjectSummary />
    </NavigationWrapper>
  );
};

export default Project;
