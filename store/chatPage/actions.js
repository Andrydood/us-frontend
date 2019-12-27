import _ from 'lodash';
import {
  SET_NEW_MESSAGE,
  SET_MESSAGES,
  SET_PROJECT_DETAILS,
  DATA_REQUEST,
  SET_SOCKET_IO_CALLBACK,
  SET_CONVERSATION_ID,
} from '~store/chatPage/actionTypes';
import { removeUnreadMessages } from '~store/messagesPage/actions';
import request from '~lib/request';

const markAsRead = (messages, conversationId) => (dispatch, getState) => {
  const state = getState();
  const { username, token } = _.get(state, 'authentication');
  const { socketIoClient } = _.get(state, 'socketIo');

  messages.forEach((message) => {
    if (!message.read && (message.username !== username)) {
      socketIoClient.emit('markAsRead', { messageId: message.id, token, conversationId });
    }
  });
};

export const getMessages = conversationId => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    request.conversation(conversationId, token).then((data) => {
      dispatch({ type: SET_MESSAGES, payload: { messages: data.messages } });
      dispatch({
        type: SET_PROJECT_DETAILS,
        payload: { conversationDetails: data.conversationDetails },
      });
      dispatch(markAsRead(data.messages, conversationId));
      dispatch(removeUnreadMessages(conversationId));
    }).catch((err) => {
      console.log('Error: ', err);
      window.location.href = '/404';
    });
  }
};

export const sendMessage = message => (dispatch, getState) => {
  if (message) {
    const state = getState();
    const { socketIoClient } = _.get(state, 'socketIo');
    if (socketIoClient) {
      socketIoClient.emit('message', message);
    }
  }
};

export const joinChatRoom = conversationId => (dispatch, getState) => {
  const state = getState();
  const { socketIoClient } = _.get(state, 'socketIo');
  const { token } = _.get(state, 'authentication');

  socketIoClient.emit('joinChatRoom', { token, conversationId });

  const socketIoCallback = ({ conversationId: incomingConversationId, message }) => {
    if (conversationId === incomingConversationId) {
      dispatch({ type: SET_NEW_MESSAGE, payload: { message } });
      dispatch(markAsRead([message], conversationId));
    }
  };

  socketIoClient.on('broadcastMessage', socketIoCallback);

  dispatch({ type: SET_SOCKET_IO_CALLBACK, payload: { socketIoCallback } });
  dispatch({ type: SET_CONVERSATION_ID, payload: { conversationId } });
};

export const leaveChatRoom = () => (dispatch, getState) => {
  const state = getState();
  const { socketIoClient } = _.get(state, 'socketIo');
  const { socketIoCallback } = _.get(state, 'chatPage');
  if (socketIoClient) {
    socketIoClient.emit('leaveChatRoom');
    socketIoClient.off('broadcastMessage', socketIoCallback);
    dispatch({ type: SET_CONVERSATION_ID, payload: { conversationId: null } });
  }
};
