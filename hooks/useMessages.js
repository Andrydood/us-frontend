import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useData from '~hooks/useData';
import { getMessages, receiveNewMessages, stopReceivingNewMessages } from '~store/messagesPage/actions';

const useMessages = () => {
  const dispatch = useDispatch();
  const connected = useSelector(state => state.socketIo.connected);

  useData({
    getData: getMessages,
  });

  useEffect(() => {
    if (connected) {
      dispatch(receiveNewMessages());
    }
    return () => dispatch(stopReceivingNewMessages());
  }, [connected]);
};

export default useMessages;
