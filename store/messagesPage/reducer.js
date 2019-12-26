import { createReducer } from '~lib/redux';

import {
  SET_MESSAGES,
  DATA_REQUEST,
  SET_SOCKET_IO_CALLBACK,
  SET_UNREAD_MESSAGES,
} from '~store/messagesPage/actionTypes';

const initialState = {
  outwardConversations: [],
  incomingConversations: [],
  isFetching: false,
  socketIoCallback: null,
  unreadMessages: 0,
};

const reducer = createReducer(initialState, {
  [DATA_REQUEST]: state => ({
    ...state,
    outwardConversations: [],
    incomingConversations: [],
    isFetching: true,
  }),
  [SET_MESSAGES]: (state, { payload }) => ({
    ...state,
    outwardConversations: payload.outwardConversations,
    incomingConversations: payload.incomingConversations,
    isFetching: false,
  }),
  [SET_SOCKET_IO_CALLBACK]: (state, { payload }) => ({
    ...state,
    socketIoCallback: payload.socketIoCallback,
  }),
  [SET_UNREAD_MESSAGES]: (state, { payload }) => ({
    ...state,
    unreadMessages: parseInt(payload.unreadMessages, 10),
  }),
});

export default reducer;
