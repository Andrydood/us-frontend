import _ from 'lodash';
import {
  SET_MESSAGES,
  DATA_REQUEST,
  SET_SOCKET_IO_CALLBACK,
  SET_UNREAD_MESSAGES,
} from '~store/messagesPage/actionTypes';
import request from '~lib/request';

const addUnreadToConversationList = (conversationList, conversationId) => conversationList.map(
  (conversation) => {
    if (conversation.id === conversationId) {
      return {
        ...conversation,
        unread: conversation.unread ? conversation.unread + 1 : 1,
      };
    }
    return conversation;
  },
);

const removeUnreadFromConversationList = (conversationList, conversationId) => conversationList.map(
  (conversation) => {
    if (conversation.id === conversationId) {
      return {
        ...conversation,
        unread: 0,
      };
    }
    return conversation;
  },
);

const updateUnreadMessages = () => (dispatch, getState) => {
  const state = getState();
  const { incomingConversations, outwardConversations } = _.get(state, 'messagesPage');

  let unreadMessages = 0;
  incomingConversations.forEach((message) => {
    unreadMessages = parseInt(unreadMessages, 10) + message.unread;
  });

  outwardConversations.forEach((message) => {
    unreadMessages = parseInt(unreadMessages, 10) + message.unread;
  });

  dispatch({ type: SET_UNREAD_MESSAGES, payload: { unreadMessages } });
};

const addUnreadMessage = conversationId => (dispatch, getState) => {
  const state = getState();
  const { incomingConversations, outwardConversations } = _.get(state, 'messagesPage');

  const newIncomingConversations = addUnreadToConversationList(
    incomingConversations,
    conversationId,
  );
  const newOutwardConversations = addUnreadToConversationList(
    outwardConversations,
    conversationId,
  );

  dispatch({
    type: SET_MESSAGES,
    payload: {
      incomingConversations: newIncomingConversations,
      outwardConversations: newOutwardConversations,
    },
  });
  dispatch(updateUnreadMessages());
};

export const removeUnreadMessages = conversationId => (dispatch, getState) => {
  const state = getState();
  const { incomingConversations, outwardConversations } = _.get(state, 'messagesPage');

  const newIncomingConversations = removeUnreadFromConversationList(
    incomingConversations,
    conversationId,
  );
  const newOutwardConversations = removeUnreadFromConversationList(
    outwardConversations,
    conversationId,
  );

  dispatch({
    type: SET_MESSAGES,
    payload: {
      incomingConversations: newIncomingConversations,
      outwardConversations: newOutwardConversations,
    },
  });
  dispatch(updateUnreadMessages());
};

export const getMessages = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    try {
      const incomingConversations = await request.conversationsForMyProjects(token);
      const outwardConversations = await request.conversationsForOtherProjects(token);
      dispatch({
        type: SET_MESSAGES,
        payload: {
          incomingConversations: incomingConversations.map(conv => ({ ...conv, unread: parseInt(conv.unread, 10) })),
          outwardConversations: outwardConversations.map(conv => ({ ...conv, unread: parseInt(conv.unread, 10) })),
        },
      });
      dispatch(updateUnreadMessages());
    } catch (err) {
      console.log(err);
      window.location.href = '/404';
    }
  }
};

export const receiveNewMessages = () => async (dispatch, getState) => {
  const { socketIoClient } = _.get(getState(), 'socketIo');

  const socketIoCallback = ({ conversationId: messageConversationId }) => {
    const { conversationId: currentConversationId } = _.get(getState(), 'chatPage');
    if ((!currentConversationId || (currentConversationId !== messageConversationId))) {
      dispatch(addUnreadMessage(messageConversationId));
    }
  };

  socketIoClient.on('broadcastMessage', socketIoCallback);

  dispatch({ type: SET_SOCKET_IO_CALLBACK, payload: { socketIoCallback } });
};

export const stopReceivingNewMessages = () => async (dispatch, getState) => {
  const state = getState();
  const { socketIoClient } = _.get(state, 'socketIo');
  const { socketIoCallback } = _.get(state, 'messagesPage');

  socketIoClient.off('broadcastMessage', socketIoCallback);
};
