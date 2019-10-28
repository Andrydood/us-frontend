import PropTypes from 'prop-types';
import { useState } from 'react';

import { authenticateFromInput } from '~lib/authentication';

const LoginForm = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    window.location.href = '/browse';
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogIn = (e) => {
    e.preventDefault();
    authenticateFromInput(email, password);
  };

  return (
    <div>
      <form onSubmit={submitLogIn}>
        <input type="email" onChange={e => setEmail(e.target.value)} />
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
};

LoginForm.defaultProps = {
  isAuthenticated: false,
};

export default LoginForm;
