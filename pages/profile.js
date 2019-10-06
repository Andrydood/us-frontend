import AuthenticationWrapper from '~components/AuthenticationWrapper/ProfilePageContainer';
import ProjectList from '~components/ProjectList/ProfilePageContainer';
import Header from '~components/Header/Container';

const Profile = () => (
  <AuthenticationWrapper>
    <Header />
    <ProjectList />
  </AuthenticationWrapper>
);

export default Profile;
