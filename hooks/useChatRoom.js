import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinChatRoom } from '~store/chatPage/actions';

const useAuthentication = (conversationId) => {
  const dispatch = useDispatch();
  const connected = useSelector(state => state.socketIo.connected);

  useEffect(() => {
    if (connected) {
      dispatch(joinChatRoom(conversationId));
    }
  }, [connected]);
};

export default useAuthentication;
