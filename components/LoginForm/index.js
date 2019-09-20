import PropTypes from 'prop-types';
import { useState } from 'react';

const LoginForm = ({ authenticateLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogIn = (e) => {
    e.preventDefault();
    console.log(e);
    authenticateLogin(email, password);
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
  authenticateLogin: PropTypes.func.isRequired,
};

export default LoginForm;
