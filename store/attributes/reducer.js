import { createReducer } from '~lib/redux';

import { SET_ATTRIBUTES } from '~store/attributes/actionTypes';

const initialState = {
  skills: [],
};

const reducer = createReducer(initialState, {
  [SET_ATTRIBUTES]: (state, { payload }) => ({
    ...state,
    skills: payload.skills,
  }),
});

export default reducer;
