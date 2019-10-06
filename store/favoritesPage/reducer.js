import { createReducer } from '~lib/redux';

import { FILL_FAVORITES_LIST } from '~store/favoritesPage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [FILL_FAVORITES_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
