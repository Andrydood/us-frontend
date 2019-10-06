import { createReducer } from '~lib/redux';

import { SET_BROWSE_LIST } from '~store/browsePage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [SET_BROWSE_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
