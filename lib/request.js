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
          if (
            status === 401
            || status === 400
            || status === 405
            || status === 500
          ) {
            console.log('error status', status);
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

const login = (email, password) => request('login/', {
  body: JSON.stringify({
    email,
    password,
  }),
  method: 'PUT',
});

module.exports = {
  login,
  // favs: 'favorites/',
  // save: pid => `favorites/${pid}/`,
  // project_create: 'project/',
  // project_edit: pid => `project/update/${pid}/`,
  // project_delete: pid => `project/${pid}/`,
  // browse: 'project/list/',
  // search: query => `search/?query=${query}`,
  // password: (token, id) => (token && id ? `password_reset/${id}/${token}/` : 'password_reset/'),
  // profile: 'profile/',
};
