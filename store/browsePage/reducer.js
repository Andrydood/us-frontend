import { createReducer } from '~lib/redux';

import { FILL_BROWSE_LIST } from '~store/browsePage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [FILL_BROWSE_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
