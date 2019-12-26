import io from 'socket.io-client';
import { SET_WEBSOCKET, SET_CONNECTED } from '~store/socketIo/actionTypes';

export const initConnection = () => (dispatch) => {
  const socketIoClient = io('ws://localhost:4000', {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    reconnectionAttempts: 5,
  });

  socketIoClient.on('connect', () => {
    dispatch({ type: SET_CONNECTED, payload: { connected: true } });
  });

  socketIoClient.on('disconnect', () => {
    dispatch({ type: SET_CONNECTED, payload: { connected: false } });
  });

  dispatch({ type: SET_WEBSOCKET, payload: { socketIoClient } });
};
