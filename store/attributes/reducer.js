import { createReducer } from '~lib/redux';

import { SET_ATTRIBUTES } from '~store/attributes/actionTypes';

const initialState = {
  locations: [],
  skills: [],
};

const reducer = createReducer(initialState, {
  [SET_ATTRIBUTES]: (state, { payload }) => ({
    ...state,
    locations: payload.locations,
    skills: payload.skills,
  }),
});

export default reducer;
