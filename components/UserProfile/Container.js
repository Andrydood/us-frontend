import { connect } from 'react-redux';

import UserProfile from '~components/UserProfile';

const mapStateToProps = state => ({
  username: state.profilePage.userData.username,
  bio: state.profilePage.userData.bio,
  location: state.profilePage.userData.location,
  skills: state.profilePage.userData.skills,
  isFetchingUserData: state.profilePage.isFetchingUserData,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
