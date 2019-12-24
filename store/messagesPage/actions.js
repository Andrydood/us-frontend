import _ from 'lodash';
import { SET_MESSAGES, DATA_REQUEST } from '~store/messagesPage/actionTypes';
import request from '~lib/request';

export const getMessages = () => async (dispatch, getState) => {
  const state = getState();
  const { token } = _.get(state, 'authentication');

  if (token) {
    dispatch({ type: DATA_REQUEST });
    try {
      const incomingConversations = await request.conversationsForMyProjects(token);
      const outwardConversations = await request.conversationsForOtherProjects(token);
      dispatch({ type: SET_MESSAGES, payload: { incomingConversations, outwardConversations } });
    } catch (err) {
      console.log(err);
      window.location.href = '/404';
    }
  }
};
