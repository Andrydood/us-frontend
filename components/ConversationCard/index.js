import Link from '~components/Link/Container';
import pageTypes from '~lib/pageTypes';
import { conversationShape } from '~lib/shapes';
import { getTime } from '~lib/helpers';
import Card from '~components/Card';
import styles from './styles.scss';

const ConversationCard = ({
  conversation: {
    id,
    updatedAt,
    username,
    name,
    unread,
  },
}) => (
  <Link className={styles.link} href="/chat/[conversationId]" as={`/chat/${id}`} pageType={pageTypes.messages}>
    <Card>
      {(unread && unread) > 0
        ? <div className={styles.unreadBubble}>{unread < 10 ? unread : null}</div>
        : null}
      <span className={styles.time}>{getTime(updatedAt)}</span>
      <p className={styles.username}>{username}</p>
      <p className={styles.projectName}>{name}</p>
    </Card>
  </Link>
);

ConversationCard.propTypes = {
  conversation: conversationShape.isRequired,
};

export default ConversationCard;
