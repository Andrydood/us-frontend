import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginForm = ({ authenticateFromInput, isAuthenticated }) => {
  if (isAuthenticated) {
    window.location.href = '/';
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
  isAuthenticated: PropTypes.bool.isRequired,
  authenticateFromInput: PropTypes.func.isRequired,
};

export default LoginForm;
