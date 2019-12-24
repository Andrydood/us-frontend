import { connect } from 'react-redux';

import ChatRoom from '~components/ChatRoom';
import { sendMessage } from '~store/chatPage/actions';

const mapStateToProps = state => ({
  messages: state.chatPage.messages,
  conversationDetails: state.chatPage.conversationDetails,
});
const mapDispatchToProps = { sendMessage };

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
