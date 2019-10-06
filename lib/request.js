import fetch from 'isomorphic-unfetch';

const API = 'https://www.itsus-api.app/';

const request = (params, options = {}) => {
  options.headers = Object.assign(
    options.headers || {},
    { 'Content-type': 'application/json' },
    options.token && { Authorization: `Token ${options.token}` },
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
            // TODO: Add logger
            console.log('error status', status);
            reject(res.data);
          }
          resolve(res.data);
        })
        .catch((err) => {
          // TODO: Add logger
          console.log('error status', response.status);
          reject(err);
        }));
  }));
};

const login = (email, password) => request('login/', {
  // TODO: SHOULD NOT BE A STRINGNGNGNGNGNGN
  body: JSON.stringify({
    email,
    password,
  }),
  method: 'PUT',
});

const browse = token => request('project/list/', { token });

const favorites = token => request('favorites/', { token });

const profile = (userId, token) => request(`profile/${userId}/`, { token });

module.exports = {
  login,
  browse,
  favorites,
  profile,
  // save: pid => `favorites/${pid}/`,
  // project_create: 'project/',
  // project_edit: pid => `project/update/${pid}/`,
  // project_delete: pid => `project/${pid}/`,
  // browse: 'project/list/',
  // search: query => `search/?query=${query}`,
  // password: (token, id) => (token && id ? `password_reset/${id}/${token}/` : 'password_reset/'),
};
