import PropTypes from 'prop-types';
import Link from '~components/Link/Container';
import pageTypes from '~lib/pageTypes';

const MessagesList = ({ incomingConversations, outwardConversations }) => (
  <div>
    <h1>incomingConversations</h1>
    <ul>
      {incomingConversations.map(conversation => (
        <li key={conversation.id}>
          <Link href="/chat/[conversationId]" as={`/chat/${conversation.id}`} pageType={pageTypes.messages}>
            <div>
              <p>{conversation.name}</p>
              <p>{conversation.username}</p>
              <p>{conversation.updatedAt}</p>
            </div>
          </Link>
          <br />
        </li>
      ))}
    </ul>
    <h1>outwardConversations</h1>
    <ul>
      {outwardConversations.map(conversation => (
        <li key={conversation.id}>
          <Link href="/chat/[conversationId]" as={`/chat/${conversation.id}`} pageType={pageTypes.messages}>
            <div>
              <p>{conversation.name}</p>
              <p>{conversation.username}</p>
              <p>{conversation.updatedAt}</p>
            </div>
          </Link>
          <br />
        </li>
      ))}
    </ul>
  </div>
);

MessagesList.propTypes = {
  incomingConversations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
    updatedAt: PropTypes.string,
  })),
  outwardConversations: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    id: PropTypes.string,
    updatedAt: PropTypes.string,
  })),
};

MessagesList.defaultProps = {
  incomingConversations: [],
  outwardConversations: [],
};

export default MessagesList;
