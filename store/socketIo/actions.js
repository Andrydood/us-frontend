import io from 'socket.io-client';
import _ from 'lodash';
import { SET_WEBSOCKET, SET_CONNECTED } from '~store/socketIo/actionTypes';

export const initConnection = () => (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');
  const { socketIoClient: oldSocketIoClient } = _.get(state, 'socketIo');

  if (!oldSocketIoClient) {
    const socketIoClient = io('ws://localhost:4000', {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socketIoClient.on('connect', () => {
      socketIoClient.emit('allowEvents', { token });
      dispatch({ type: SET_CONNECTED, payload: { connected: true } });
    });

    socketIoClient.on('disconnect', () => {
      dispatch({ type: SET_CONNECTED, payload: { connected: false } });
    });

    dispatch({ type: SET_WEBSOCKET, payload: { socketIoClient } });
  }
};
