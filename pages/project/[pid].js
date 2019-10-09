import { useRouter } from 'next/router';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/ProjectContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectSummary from '~components/ProjectSummary/Container';

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <AuthenticationWrapper>
      <DataWrapper needsAuthentication dataId={pid}>
        <NavigationWrapper>
          <ProjectSummary />
        </NavigationWrapper>
      </DataWrapper>
    </AuthenticationWrapper>
  );
};

export default Project;
