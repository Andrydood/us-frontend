import PropTypes from 'prop-types';
import ConversationCard from '~components/ConversationCard';
import { conversationShape } from '~lib/shapes';
import styles from './styles.scss';

const MessagesList = ({ incomingConversations, outwardConversations }) => (
  <div className={styles.messagesList}>
    <h1 className={styles.header}>Conversations about your projects:</h1>
    {incomingConversations.map(conversation => (
      <ConversationCard conversation={conversation} />
    ))}
    <h1 className={styles.header}>Conversations about other projects:</h1>
    {outwardConversations.map(conversation => (
      <ConversationCard conversation={conversation} />
    ))}
  </div>
);

MessagesList.propTypes = {
  incomingConversations: PropTypes.arrayOf(conversationShape),
  outwardConversations: PropTypes.arrayOf(conversationShape),
};

MessagesList.defaultProps = {
  incomingConversations: [],
  outwardConversations: [],
};

export default MessagesList;
