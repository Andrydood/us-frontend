import { useRouter } from 'next/router';

import NavigationWrapper from '~components/NavigationWrapper';
import UserProfile from '~components/UserProfile/Container';
import ProjectList from '~components/ProjectList/ProfilePageContainer';
import usePageType from '~hooks/usePageType';
import useAuthentication from '~hooks/useAuthentication';
import useData from '~hooks/useData';
import { getProfileData } from '~store/profilePage/actions';
import pageTypes from '~lib/pageTypes';

const User = () => {
  const router = useRouter();
  const { username } = router.query;

  usePageType(pageTypes.profile);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: () => getProfileData(username),
  });


  return (
    <NavigationWrapper>
      <UserProfile />
      <ProjectList />
    </NavigationWrapper>
  );
};

export default User;
