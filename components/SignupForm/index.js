import PropTypes from 'prop-types';
import { useState } from 'react';

import request from '~lib/request';
import { emailIsValid } from '~lib/helpers';

import LocationSelector from '~components/LocationSelector/Container';
import SkillsSelector from '~components/SkillsSelector/Container';

const SignupForm = ({
  isAuthenticated,
}) => {
  if (isAuthenticated) {
    window.location.href = '/browse';
  }

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [bio, setBio] = useState('');
  const [locationId, setLocationId] = useState(1);
  const [skillIds, setSkillIds] = useState([]);

  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [secondPasswordError, setSecondPasswordError] = useState('');
  const [bioError, setBioError] = useState('');
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
        } else {
          setUsernameError('');
        }
        setUsername(value);
        break;
      case 'bio':
        if (value.length > 500) {
          setBioError('Bio is too long');
        } else {
          setBioError('');
        }
        setBio(value);
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
  && !bioError
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
        bio,
        locationId,
        skillIds,
      }).then(() => {
        window.location.href = '/login';
      }).catch(({ message }) => {
        setErrorMessage(message);
      });
    }
  };

  return (
    <div>
      <h5>
        {errorMessage}
      </h5>
      <form onSubmit={submitSignUp}>
        <input type="email" name="email" placeholder="email(required)" onChange={e => handleTextInput(e.target)} required />
        <p>{emailError}</p>
        <input type="text" name="username" placeholder="username(required)" onChange={e => handleTextInput(e.target)} required />
        <p>{usernameError}</p>
        <textarea name="bio" placeholder="bio" onChange={e => handleTextInput(e.target)} />
        <p>{bioError}</p>
        <input type="password" name="password" placeholder="password(required)" onChange={e => handleTextInput(e.target)} required />
        <p>{passwordError}</p>
        <input type="password" name="secondPassword" placeholder="password again (required)" onChange={e => handleTextInput(e.target)} required />
        <p>{secondPasswordError}</p>
        <LocationSelector handleSelect={setLocationId} />
        <p>Skills</p>
        <SkillsSelector currentSkillIds={skillIds} setSkillIds={setSkillIds} />
        <input type="submit" />
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  isAuthenticated: PropTypes.bool,
};

SignupForm.defaultProps = {
  isAuthenticated: false,
};

export default SignupForm;
