import { useRouter } from 'next/router';
import { getMessages } from '~store/chatPage/actions';
import NavigationWrapper from '~components/NavigationWrapper';
import useAuthentication from '~hooks/useAuthentication';
import usePageType from '~hooks/usePageType';
import useChatRoom from '~hooks/useChatRoom';
import useData from '~hooks/useData';
import Chatroom from '~components/ChatRoom/Container';
import pageTypes from '~lib/pageTypes';


const Conversation = () => {
  const router = useRouter();
  const { conversationId } = router.query;

  usePageType(pageTypes.messages);
  useAuthentication({ redirectOnFail: true });
  useChatRoom(conversationId);
  useData({
    getData: () => getMessages(conversationId),
  });

  return (
    <NavigationWrapper>
      <Chatroom />
    </NavigationWrapper>
  );
};

export default Conversation;
