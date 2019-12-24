import { createReducer } from '~lib/redux';

import { SET_WEBSOCKET, SET_CONNECTED } from '~store/socketIo/actionTypes';

const initialState = {
  socketIoClient: null,
  connected: false,
};

const reducer = createReducer(initialState, {
  [SET_WEBSOCKET]: (state, { payload }) => ({
    ...state,
    socketIoClient: payload.socketIoClient,
  }),
  [SET_CONNECTED]: (state, { payload }) => ({
    ...state,
    connected: payload.connected,
  }),
});

export default reducer;
