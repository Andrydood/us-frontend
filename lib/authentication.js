import request from '~lib/request';

const TOKEN_KEY = 'token';

const authenticateFromInput = (email, password) => request.login(email, password)
  .then(({ token }) => {
    if (window) {
      window.localStorage.setItem(TOKEN_KEY, token);
      window.location.href = '/';
    }
    return Error;
  })
  .catch(() => {
    console.log('Error authenticating');
  });

module.exports = {
  authenticateFromInput,
  TOKEN_KEY,
};
