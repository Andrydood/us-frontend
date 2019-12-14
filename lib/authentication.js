import request from '~lib/request';

export const TOKEN_KEY = 'token';

export const saveToken = token => window.localStorage.setItem(TOKEN_KEY, token);

export const authenticateFromInput = (email, password) => request.login(email, password)
  .then(({ token }) => {
    if (window) {
      saveToken(token);
      window.location.href = '/browse';
    }
    return Error;
  })
  .catch(() => 'Invalid Credentials');
