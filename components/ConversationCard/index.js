import Link from '~components/Link/Container';
import pageTypes from '~lib/pageTypes';
import { conversationShape } from '~lib/shapes';
import { getTime } from '~lib/helpers';
import Card from '~components/Card';
import styles from './styles.scss';

const ConversationCard = ({ conversation }) => (
  <Link className={styles.link} href="/chat/[conversationId]" as={`/chat/${conversation.id}`} pageType={pageTypes.messages}>
    <Card>
      <span className={styles.time}>{getTime(conversation.updatedAt)}</span>
      <p className={styles.username}>{conversation.username}</p>
      <p className={styles.projectName}>{conversation.name}</p>
    </Card>
  </Link>
);

ConversationCard.propTypes = {
  conversation: conversationShape.isRequired,
};

export default ConversationCard;
