import { connect } from 'react-redux';

import MessagesList from '~components/MessagesList';

const mapStateToProps = state => ({
  incomingConversations: state.messagesPage.incomingConversations,
  outwardConversations: state.messagesPage.outwardConversations,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
