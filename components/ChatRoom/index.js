import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from '~components/Link/Container';
import pageTypes from '~lib/pageTypes';

const Conversation = ({ sendMessage, messages, conversationDetails }) => {
  const [message, setMessage] = useState('');
  const textInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message.trim());
    setMessage('');
    textInput.current.value = '';
  };

  return (
    <div>
      <h1>Project:</h1>
      <Link href="/project/[id]" as={`/project/${conversationDetails.projectId}`} pageType={pageTypes.project}>
        <h2>{JSON.stringify(conversationDetails)}</h2>
      </Link>
      <form onSubmit={handleSubmit}>
        <ul>
          {messages.map((m, idx) => {
            const key = `message-${idx}`;
            return <li key={key}>{m.content}</li>;
          })}
        </ul>
        <input type="text" onChange={e => setMessage(e.target.value)} ref={textInput} />
        <button type="submit">Send</button>
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
};

Conversation.defaultProps = {
  conversationDetails: {},
  messages: [],
  sendMessage: () => {},
};

export default Conversation;
