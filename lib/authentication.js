import request from '~lib/request';

export const TOKEN_KEY = 'token';

export const authenticateFromInput = (email, password) => request.login(email, password)
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
