import { useRouter } from 'next/router';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/ProfilePageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/ProfilePageContainer';
import UserProfile from '~components/UserProfile/Container';

const User = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <AuthenticationWrapper redirectOnFail>
      <DataWrapper needsAuthentication dataId={username}>
        <NavigationWrapper>
          <UserProfile />
          <ProjectList />
        </NavigationWrapper>
      </DataWrapper>
    </AuthenticationWrapper>
  );
};

export default User;
