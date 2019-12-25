import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getTime } from '~lib/helpers';
import styles from './styles.scss';

const ChatMessageList = ({
  messages,
  username,
}) => {
  const messageList = useRef(null);

  const updateScroll = () => {
    messageList.current.scrollTop = messageList.current.scrollHeight;
  };

  const createMessageInfo = m => `${m.username}\u00A0\u00A0\u00A0${getTime(m.created_at)}`;

  useEffect(() => {
    updateScroll();
  }, [messages]);


  return (
    <ul className={styles.messages} ref={messageList}>
      {messages.map((m, idx) => {
        const key = `message-${idx}`;
        const currentMessageInfo = createMessageInfo(m);
        const nextMessageInfo = messages[idx + 1] ? createMessageInfo(messages[idx + 1]) : null;
        const displayedMessageInfo = nextMessageInfo === currentMessageInfo
          ? null
          : (
            <span className={styles.messageInfo}>
              {currentMessageInfo}
            </span>
          );
        return (
          <li className={styles.message} key={key}>
            <div className={
                classnames({ [styles.ownMessage]: m.username === username })}
            >
              <span className={styles.messageBubble}>
                {m.content}
              </span>
              {displayedMessageInfo}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ChatMessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.string,
  })),
  username: PropTypes.string,
};

ChatMessageList.defaultProps = {
  messages: [],
  username: null,
};

export default ChatMessageList;
