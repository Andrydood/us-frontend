import { connect } from 'react-redux';

import Header from '~components/Header';
import { logOut } from '~store/authentication/actions';

const mapStateToProps = state => ({
  profileUsername: state.profilePage.userData.username,
  currentPage: state.navigation.pageType,
});
const mapDispatchToProps = { onClickLogout: logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
