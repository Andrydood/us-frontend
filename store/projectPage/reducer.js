import { createReducer } from '~lib/redux';

import { SET_PROJECT_DATA } from '~store/projectPage/actionTypes';

const initialState = {
  projectId: null,
  name: null,
};

const reducer = createReducer(initialState, {
  [SET_PROJECT_DATA]: (state, { payload }) => ({
    ...state,
    name: payload.name,
    projectId: payload.projectId,
  }),
});

export default reducer;
