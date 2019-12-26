import _ from 'lodash';
import {
  SET_MESSAGES,
  DATA_REQUEST,
  SET_SOCKET_IO_CALLBACK,
  SET_UNREAD_MESSAGES,
} from '~store/messagesPage/actionTypes';
import request from '~lib/request';

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

export const updateMessages = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    try {
      const incomingConversations = await request.conversationsForMyProjects(token);
      const outwardConversations = await request.conversationsForOtherProjects(token);
      dispatch({ type: SET_MESSAGES, payload: { incomingConversations, outwardConversations } });
      dispatch(updateUnreadMessages());
    } catch (err) {
      console.log(err);
      window.location.href = '/404';
    }
  }
};

export const getMessages = () => async (dispatch) => {
  dispatch({ type: DATA_REQUEST });
  dispatch(updateMessages());
};


export const receiveNewMessages = () => async (dispatch, getState) => {
  const { socketIoClient } = _.get(getState(), 'socketIo');

  const socketIoCallback = () => {
    dispatch(getMessages());
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
