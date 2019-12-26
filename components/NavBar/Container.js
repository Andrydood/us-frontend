import { connect } from 'react-redux';

import NavBar from '~components/NavBar';

const mapStateToProps = state => ({
  username: state.authentication.username,
  unreadMessages: state.messagesPage.unreadMessages,
  currentPage: state.navigation.pageType,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
