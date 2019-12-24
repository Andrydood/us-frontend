import _ from 'lodash';
import { SET_NEW_MESSAGE, SET_MESSAGES, SET_PROJECT_DETAILS, DATA_REQUEST } from '~store/chatPage/actionTypes';
import request from '~lib/request';

export const getMessages = conversationId => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    request.conversation(conversationId, token).then((data) => {
      dispatch({ type: SET_MESSAGES, payload: { messages: data.messages } });
      dispatch({ type: SET_PROJECT_DETAILS, payload: { conversationDetails: data.conversationDetails } });
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
  const { userId, username } = _.get(state, 'authentication');

  socketIoClient.emit('joinChatRoom', { userId, conversationId, username });

  socketIoClient.on('broadcastMessage', (data) => {
    dispatch({ type: SET_NEW_MESSAGE, payload: { message: data } });
  });
};
