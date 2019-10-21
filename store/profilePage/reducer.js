import { createReducer } from '~lib/redux';

import { SET_USER_DATA, SET_USER_PROJECTS } from '~store/profilePage/actionTypes';

const initialState = {
  userData: {
    id: null,
    username: null,
    firstName: null,
    lastName: null,
    bio: null,
    location: null,
    skills: [],
  },
  projects: [],
};

const reducer = createReducer(initialState, {
  [SET_USER_PROJECTS]: (state, { payload }) => ({
    ...state,
    projects: payload.projects,
  }),
  [SET_USER_DATA]: (state, { payload }) => ({
    ...state,
    userData: {
      id: payload.userData.id,
      username: payload.userData.username,
      firstName: payload.userData.firstName,
      lastName: payload.userData.lastName,
      bio: payload.userData.bio,
      location: payload.userData.location,
      skills: payload.userData.skills,
    },
  }),
});

export default reducer;
