import { useState } from 'react';
import { Mail, Lock, User } from 'react-feather';
import Link from '~components/Link';
import CardWithLogo from '~components/CardWithLogo';
import request from '~lib/request';
import { emailIsValid } from '~lib/helpers';
import styles from './styles.scss';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secondPasswordError, setSecondPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextInput = (target) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        if (!emailIsValid(value)) {
          setEmailError('Email is not valid');
        } else {
          setEmailError('');
        }
        setEmail(value);
        break;
      case 'username':
        if (value.length <= 3) {
          setUsernameError('Username is too short');
        } else if (value.length > 20) {
          setUsernameError('Username is too long');
        } else if (!value.match(/^[a-zA-Z0-9_]*$/)) {
          setUsernameError('Only use letters and numbers');
        } else {
          setUsernameError('');
        }
        setUsername(value);
        break;
      case 'password':
        if (value.length <= 5) {
          setPasswordError('Password is too short');
        } else if (value.length > 30) {
          setPasswordError('Password is too long');
        } else {
          setPasswordError('');
        }
        setPassword(value);
        break;
      case 'secondPassword':
        if (value !== password) {
          setSecondPasswordError('Passwords do not match');
        } else {
          setSecondPasswordError('');
        }
        setSecondPassword(value);
        break;
      default:
        break;
    }
  };

  const inputIsValid = () => !emailError
  && !usernameError
  && !passwordError
  && !secondPasswordError
  && !!email
  && !!username
  && !!password
  && !!secondPassword;

  const submitSignUp = (e) => {
    e.preventDefault();
    if (inputIsValid()) {
      request.signUp({
        email,
        username,
        password,
      }).then(() => {
        window.location.href = '/login';
      }).catch(({ message }) => {
        setErrorMessage(message);
      });
    }
  };

  return (
    <CardWithLogo>
      <div className={styles.title}>Sign Up</div>
      <form onSubmit={submitSignUp}>
        <div className={styles.input}>
          <Mail size={15} className={styles.icon} />
          <input placeholder="Email" name="email" type="email" className={styles.field} onChange={e => handleTextInput(e.target)} />
        </div>
        <span className={styles.error}>{emailError}</span>
        <div className={styles.input}>
          <User size={15} className={styles.icon} />
          <input placeholder="Username" name="username" type="text" className={styles.field} onChange={e => handleTextInput(e.target)} />
        </div>
        <span className={styles.error}>{usernameError}</span>
        <div className={styles.input}>
          <Lock size={15} className={styles.icon} />
          <input placeholder="Password" name="password" type="password" className={styles.field} onChange={e => handleTextInput(e.target)} />
        </div>
        <span className={styles.error}>{passwordError}</span>
        <div className={styles.input}>
          <Lock size={15} className={styles.icon} />
          <input placeholder="Confirm Password" name="secondPassword" type="password" className={styles.field} onChange={e => handleTextInput(e.target)} />
        </div>
        <span className={styles.error}>{secondPasswordError}</span>
        <button type="submit" className={styles.submitButton}>Sign Up</button>
        <span className={styles.mainError}>{errorMessage}</span>
      </form>
      <span className={styles.logInText}>
        Already have an account?
        {' '}
        <Link href="/login" className={styles.link}>Log In</Link>
      </span>
    </CardWithLogo>
  );
};

export default SignupForm;
