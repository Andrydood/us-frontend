import { createReducer } from '~lib/redux';

import { SET_MESSAGES, DATA_REQUEST } from '~store/messagesPage/actionTypes';

const initialState = {
  outwardConversations: [],
  incomingConversations: [],
  isFetching: false,
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
});

export default reducer;
