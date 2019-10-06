import AuthenticationWrapper from '~components/AuthenticationWrapper/ProfilePageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/ProfilePageContainer';

const Profile = () => (
  <AuthenticationWrapper>
    <NavigationWrapper>
      <ProjectList />
    </NavigationWrapper>
  </AuthenticationWrapper>
);

export default Profile;
