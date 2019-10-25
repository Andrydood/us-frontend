import { createReducer } from '~lib/redux';

import { SET_PROJECT_DATA, DATA_REQUEST } from '~store/projectPage/actionTypes';

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
  isFetching: false,
};

const reducer = createReducer(initialState, {
  [DATA_REQUEST]: state => ({
    ...state,
    owner: null,
    id: null,
    name: null,
    description: null,
    inspiredBy: null,
    assets: null,
    contact: {},
    location: null,
    neededSkills: [],
    isFetching: true,
  }),
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
    isFetching: false,
  }),
});

export default reducer;
