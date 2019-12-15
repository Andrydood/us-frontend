import { useState } from 'react';
import { Mail, Lock } from 'react-feather';
import CardWithLogo from '~components/CardWithLogo';
import Link from '~components/Link';
import styles from './styles.scss';

import { authenticateFromInput } from '~lib/authentication';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitLogIn = async (e) => {
    e.preventDefault();
    const loginError = await authenticateFromInput(email, password);
    setError(loginError);
  };

  return (
    <CardWithLogo>
      <div className={styles.title}>Log In</div>
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
        <span className={styles.mainError}>{error}</span>
      </form>
      <span className={styles.signUpText}>
        Are you new?
        {' '}
        <Link href="/signup" className={styles.signUpLink}>Sign Up</Link>
      </span>
    </CardWithLogo>
  );
};

export default LoginForm;
