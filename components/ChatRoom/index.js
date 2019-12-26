import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from '~components/Link/Container';
import ChatMessageList from '~components/ChatMessageList';
import pageTypes from '~lib/pageTypes';
import styles from './styles.scss';

const Conversation = ({
  sendMessage,
  messages,
  conversationDetails,
  username,
}) => {
  const [message, setMessage] = useState('');
  const textInput = useRef(null);
  const otherUser = conversationDetails.isOwner
    ? conversationDetails.interestedUser
    : conversationDetails.projectOwner;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (trimmedMessage) {
      sendMessage(trimmedMessage);
      setMessage('');
      textInput.current.value = '';
    }
  };

  return (
    <div>
      <div className={styles.projectBanner}>
        <Link className={styles.link} href="/user/[username]" as={`/user/${otherUser}`} pageType={pageTypes.profile}>
          <span className={styles.userLink}>{otherUser}</span>
        </Link>
        <Link className={styles.link} href="/project/[id]" as={`/project/${conversationDetails.projectId}`} pageType={pageTypes.project}>
          <span className={styles.projectLink}>{conversationDetails.projectName}</span>
        </Link>
      </div>
      <ChatMessageList messages={messages} username={username} />
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.textInput}
          type="text"
          onChange={e => setMessage(e.target.value)}
          ref={textInput}
          placeholder="Type a message..."
        />
      </form>
    </div>
  );
};

Conversation.propTypes = {
  conversationDetails: PropTypes.shape({
    interestedUser: PropTypes.string,
    projectOwner: PropTypes.string,
    projectName: PropTypes.string,
    projectId: PropTypes.string,
    isOwner: PropTypes.bool,
  }),
  sendMessage: PropTypes.func,
  messages: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
  })),
  username: PropTypes.string,
};

Conversation.defaultProps = {
  conversationDetails: {},
  messages: [],
  username: null,
  sendMessage: () => {},
};

export default Conversation;
