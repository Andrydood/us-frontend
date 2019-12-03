import { createReducer } from '~lib/redux';

import {
  SET_PROJECT_DATA,
  DATA_REQUEST,
  IS_FAVORITE_REQUEST,
  SET_IS_FAVORITE,
} from '~store/projectPage/actionTypes';

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
  createdAt: null,
  isFetching: false,
  isFavorite: false,
  isFetchingIsFavorite: false,
  isOwner: false,
  likes: null,
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
    createdAt: null,
    isFetching: true,
    isFavorite: false,
    isFetchingIsFavorite: true,
    isOwner: false,
    likes: null,
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
    createdAt: payload.project.createdAt,
    likes: payload.project.likes,
    isFetching: false,
    isFavorite: payload.isFavorite,
    isFetchingIsFavorite: false,
    isOwner: payload.isOwner,
  }),
  [IS_FAVORITE_REQUEST]: state => ({
    ...state,
    isFetchingIsFavorite: true,
  }),
  [SET_IS_FAVORITE]: (state, { payload }) => ({
    ...state,
    likes: payload.likes,
    isFavorite: payload.isFavorite,
    isFetchingIsFavorite: false,
  }),
});

export default reducer;
