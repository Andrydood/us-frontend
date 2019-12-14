import { createReducer } from '~lib/redux';

import {
  SET_USER_DATA,
  SET_USER_PROJECTS,
  USER_DATA_REQUEST,
  USER_PROJECTS_REQUEST,
} from '~store/profilePage/actionTypes';

const initialState = {
  userData: {
    id: null,
    username: null,
    bio: null,
    location: null,
    skills: [],
  },
  projects: [],
  isFetchingProjects: false,
  isFetchinUserData: false,
};

const reducer = createReducer(initialState, {
  [USER_PROJECTS_REQUEST]: state => ({
    ...state,
    projects: [],
    isFetchingProjects: true,
  }),
  [USER_DATA_REQUEST]: state => ({
    ...state,
    userData: {
      id: null,
      lastName: null,
      bio: null,
      location: null,
      skills: [],
    },
    isFetchinUserData: true,
  }),
  [SET_USER_PROJECTS]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
    isFetchingProjects: false,
  }),
  [SET_USER_DATA]: (state, { payload }) => ({
    ...state,
    userData: {
      id: payload.userData.id,
      username: payload.userData.username,
      bio: payload.userData.bio,
      location: payload.userData.location.label,
      skills: payload.userData.skills,
    },
    isFetchinUserData: false,
  }),
});

export default reducer;
