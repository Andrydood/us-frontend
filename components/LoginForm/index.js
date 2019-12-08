import PropTypes from 'prop-types';
import { useState } from 'react';
import { Mail, Lock } from 'react-feather';
import Card from '~components/Card';
import Link from '~components/Link';
import LogoIcon from '~lib/static/logo.svg';
import styles from './styles.scss';

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
    <Card className={styles.card}>
      <div className={styles.logoContainer}><LogoIcon className={styles.logo} /></div>
      <div className={styles.title}>Sign In</div>
      <form onSubmit={submitLogIn}>
        <div className={styles.input}>
          <Mail size={15} className={styles.icon} />
          <input id="email" placeholder="Email" type="email" className={styles.field} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className={styles.input}>
          <Lock size={15} className={styles.icon} />
          <input id="password" placeholder="Password" type="password" className={styles.field} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitButton}>Log In</button>
      </form>
      <span className={styles.signUpText}>
        Are you new?
        {' '}
        <Link href="/signup" className={styles.signUpLink}>Sign Up</Link>
      </span>
    </Card>
  );
};

LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
};

LoginForm.defaultProps = {
  isAuthenticated: false,
};

export default LoginForm;
