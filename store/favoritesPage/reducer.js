import { createReducer } from '~lib/redux';

import { SET_FAVORITES_LIST } from '~store/favoritesPage/actionTypes';

const initialState = {
  projects: [],
};

const reducer = createReducer(initialState, {
  [SET_FAVORITES_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
});

export default reducer;
