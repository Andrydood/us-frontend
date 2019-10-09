import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import DataWrapper from '~components/DataWrapper/ProfilePageContainer';
import NavigationWrapper from '~components/NavigationWrapper';
import ProjectList from '~components/ProjectList/ProfilePageContainer';

const Profile = () => (
  <AuthenticationWrapper>
    <DataWrapper needsAuthentication>
      <NavigationWrapper>
        <ProjectList />
      </NavigationWrapper>
    </DataWrapper>
  </AuthenticationWrapper>
);

export default Profile;
