import fetch from 'isomorphic-unfetch';

const API = 'http://localhost:4000';

const request = (params, options = {}) => {
  options.headers = Object.assign(
    options.headers || {},
    { 'Content-type': 'application/json' },
    options.token && { Authorization: options.token },
  );

  return new Promise(((resolve, reject) => {
    fetch(API + params, options)
      .then(response => response.json()
        .then(data => ({
          data,
          status: response.status,
        }))
        .then((res) => {
          const { status } = res;
          if (status.toString().match(/^[4,5]\d*/)) {
            reject(res.data);
          }
          resolve(res.data);
        })
        .catch((err) => {
          console.log('error status', response.status);
          reject(err);
        }));
  }));
};

const login = (email, password) => request('/user/login/', {
  body: JSON.stringify({
    email,
    password,
  }),
  method: 'POST',
});

const signUp = ({
  email,
  username,
  password,
}) => request('/user/create/', {
  body: JSON.stringify({
    email,
    username,
    password,
  }),
  method: 'POST',
});

const browse = token => request('/projects', { token });

const favorites = token => request('/favorites', { token });

const profile = (username, token) => request(`/user/profile/${username}`, { token });

const userProjects = (username, token) => request(`/projects/user/${username}`, { token });

const project = (projectId, token) => request(`/projects/${projectId}`, { token });

const locations = () => request('/locations');

const skills = () => request('/skills');

const setupAccount = ({
  bio,
  location,
  skillIds,
}, token) => request('/user/setup', {
  body: JSON.stringify({
    bio,
    location,
    skillIds,
  }),
  method: 'POST',
  token,
});

const createProject = ({
  name,
  description,
  inspiredBy,
  assets,
  location,
  skillsNeeded,
}, token) => request('/projects', {
  body: JSON.stringify({
    name,
    description,
    inspiredBy,
    assets,
    location,
    skillsNeeded,
  }),
  method: 'POST',
  token,
});

const createConversation = (projectId, token) => request('/chat/create', {
  body: JSON.stringify({
    projectId,
  }),
  method: 'POST',
  token,
});

const deleteProject = (projectId, token) => request(`/projects/${projectId}`, {
  method: 'DELETE',
  token,
});

const favoriteProject = (projectId, token) => request('/favorites', {
  body: JSON.stringify({
    projectId,
  }),
  method: 'POST',
  token,
});

const isFavorite = (projectId, token) => request(`/favorites/isFavorite/${projectId}`, {
  method: 'GET',
  token,
});

const conversation = (conversationId, token) => request(`/chat/conversation/${conversationId}`, {
  method: 'GET',
  token,
});

const conversationsForMyProjects = token => request('/chat/my-projects', {
  method: 'GET',
  token,
});

const conversationsForOtherProjects = token => request('/chat/other-projects', {
  method: 'GET',
  token,
});

const unFavoriteProject = (projectId, token) => request(`/favorites/${projectId}`, {
  method: 'DELETE',
  token,
});

const refreshToken = token => request('/user/refresh', { token });

module.exports = {
  login,
  signUp,
  browse,
  favorites,
  profile,
  project,
  userProjects,
  locations,
  skills,
  createProject,
  refreshToken,
  deleteProject,
  favoriteProject,
  unFavoriteProject,
  isFavorite,
  setupAccount,
  conversation,
  createConversation,
  conversationsForMyProjects,
  conversationsForOtherProjects,
};
