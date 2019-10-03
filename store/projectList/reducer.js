import { createReducer } from '~lib/redux';

import { FILL_LIST } from '~store/projectList/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [FILL_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
