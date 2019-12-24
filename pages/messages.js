import NavigationWrapper from '~components/NavigationWrapper';
import MessagesList from '~components/MessagesList/Container';
import useAuthentication from '~hooks/useAuthentication';
import usePageType from '~hooks/usePageType';
import pageTypes from '~lib/pageTypes';
import useData from '~hooks/useData';
import { getMessages } from '~store/messagesPage/actions';

const Conversation = () => {
  usePageType(pageTypes.messages);
  useAuthentication({ redirectOnFail: true });
  useData({
    getData: getMessages,
  });

  return (
    <NavigationWrapper>
      <MessagesList />
    </NavigationWrapper>
  );
};

export default Conversation;
