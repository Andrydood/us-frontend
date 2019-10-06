import { createReducer } from '~lib/redux';

import { FILL_PROFILE_PAGE } from '~store/profilePage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [FILL_PROFILE_PAGE]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
