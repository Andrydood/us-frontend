import { createReducer } from '~lib/redux';

import { SET_NEW_MESSAGE, SET_MESSAGES, DATA_REQUEST, SET_PROJECT_DETAILS } from '~store/chatPage/actionTypes';

const initialState = {
  messages: [],
  conversationDetails: {},
  isFetching: false,
};

const reducer = createReducer(initialState, {
  [DATA_REQUEST]: state => ({
    ...state,
    messages: [],
    conversationDetails: {},
    isFetching: true,
  }),
  [SET_MESSAGES]: (state, { payload }) => ({
    ...state,
    messages: payload.messages,
    isFetching: false,
  }),
  [SET_PROJECT_DETAILS]: (state, { payload }) => ({
    ...state,
    conversationDetails: payload.conversationDetails,
    isFetching: false,
  }),
  [SET_NEW_MESSAGE]: (state, { payload }) => ({
    ...state,
    messages: [...state.messages, payload.message],
  }),
});

export default reducer;
