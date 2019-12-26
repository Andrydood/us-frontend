import { connect } from 'react-redux';

import MessagesList from '~components/MessagesList';

const mapStateToProps = state => ({
  incomingConversations: state.messagesPage.incomingConversations,
  outwardConversations: state.messagesPage.outwardConversations,
  isFetching: state.messagesPage.isFetching,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
