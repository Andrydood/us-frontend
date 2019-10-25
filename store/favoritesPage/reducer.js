import { createReducer } from '~lib/redux';

import { SET_FAVORITES_LIST, DATA_REQUEST } from '~store/favoritesPage/actionTypes';

const initialState = {
  projects: [],
  isFetching: false,
};

const reducer = createReducer(initialState, {
  [DATA_REQUEST]: state => ({
    ...state,
    projects: [],
    isFetching: true,
  }),
  [SET_FAVORITES_LIST]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
    isFetching: false,
  }),
});

export default reducer;
