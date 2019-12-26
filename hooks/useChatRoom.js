import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinChatRoom, leaveChatRoom } from '~store/chatPage/actions';

const useChatRoom = (conversationId) => {
  const dispatch = useDispatch();
  const connected = useSelector(state => state.socketIo.connected);

  useEffect(() => {
    if (connected) {
      dispatch(joinChatRoom(conversationId));
    }
    return () => dispatch(leaveChatRoom());
  }, [connected]);
};

export default useChatRoom;
