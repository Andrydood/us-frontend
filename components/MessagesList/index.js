import PropTypes from 'prop-types';
import ConversationCard from '~components/ConversationCard';
import LoadingWrapper from '~components/LoadingWrapper';
import { conversationShape } from '~lib/shapes';
import styles from './styles.scss';

const MessagesList = ({ incomingConversations, outwardConversations, isFetching }) => (
  <LoadingWrapper isLoading={isFetching}>
    <div className={styles.messagesList}>
      {(outwardConversations.length === 0 && incomingConversations.length === 0)
        ? <h1 className={styles.header}>You don&apos;t have any conversations open</h1>
        : null
    }
      {incomingConversations.length > 0
        ? <h1 className={styles.header}>Your Projects:</h1>
        : null
    }
      {incomingConversations.map(conversation => (
        <ConversationCard key={conversation.id} conversation={conversation} />
      ))}
      {outwardConversations.length > 0
        ? <h1 className={styles.header}>Other Projects:</h1>

        : null
    }
      {outwardConversations.map(conversation => (
        <ConversationCard key={conversation.id} conversation={conversation} />
      ))}
    </div>
  </LoadingWrapper>
);

MessagesList.propTypes = {
  incomingConversations: PropTypes.arrayOf(conversationShape),
  outwardConversations: PropTypes.arrayOf(conversationShape),
  isFetching: PropTypes.bool,
};

MessagesList.defaultProps = {
  incomingConversations: [],
  outwardConversations: [],
  isFetching: true,
};

export default MessagesList;
