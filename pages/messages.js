import NavigationWrapper from '~components/NavigationWrapper';
import MessagesList from '~components/MessagesList/Container';
import useAuthentication from '~hooks/useAuthentication';
import usePageType from '~hooks/usePageType';
import pageTypes from '~lib/pageTypes';

const Conversation = () => {
  usePageType(pageTypes.messages);
  useAuthentication({ redirectOnFail: true });

  return (
    <NavigationWrapper>
      <MessagesList />
    </NavigationWrapper>
  );
};

export default Conversation;
