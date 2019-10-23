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

const browse = token => request('/projects', { token });

const favorites = token => request('/favorites', { token });

const profile = (username, token) => request(`/user/profile/${username}`, { token });

const userProjects = (username, token) => request(`/projects/user/${username}`, { token });

const project = (projectId, token) => request(`/projects/${projectId}`, { token });

module.exports = {
  login,
  browse,
  favorites,
  profile,
  project,
  userProjects,
};
