import { createReducer } from '~lib/redux';

import { SET_PROFILE_DATA } from '~store/profilePage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [SET_PROFILE_DATA]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
