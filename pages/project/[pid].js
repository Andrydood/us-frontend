import { useRouter } from 'next/router';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectSummary from '~components/ProjectSummary/Container';

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <AuthenticationWrapper>
      <NavigationWrapper>
        <ProjectSummary projectId={pid} />
      </NavigationWrapper>
    </AuthenticationWrapper>
  );
};

export default Project;
