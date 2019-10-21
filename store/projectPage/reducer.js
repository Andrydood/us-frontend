import { createReducer } from '~lib/redux';

import { SET_PROJECT_DATA } from '~store/projectPage/actionTypes';

const initialState = {
  owner: null,
  id: null,
  name: null,
  description: null,
  inspiredBy: null,
  assets: null,
  contact: {},
  location: null,
  neededSkills: [],
};

const reducer = createReducer(initialState, {
  [SET_PROJECT_DATA]: (state, { payload }) => ({
    ...state,
    owner: payload.project.owner,
    id: payload.project.id,
    name: payload.project.name,
    description: payload.project.description,
    inspiredBy: payload.project.inspiredBy,
    assets: payload.project.assets,
    contact: payload.project.contact,
    location: payload.project.location,
    neededSkills: payload.project.neededSkills,
  }),
});

export default reducer;
