import PropTypes from 'prop-types';
import { useState } from 'react';
import _ from 'lodash';

import { signUp } from '~lib/authentication';
import { emailIsValid } from '~lib/helpers';

import LocationSelector from '~components/LocationSelector/Container';
import SkillsSelector from '~components/SkillsSelector/Container';

const SignupForm = ({
  isAuthenticated,
}) => {
  if (isAuthenticated) {
    window.location.href = '/';
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
        } else if (value.length > 30) {
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
        if (value.length <= 3) {
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

  const handleCheckboxInput = (value, isChecked) => {
    const newSkills = skillIds;
    if (isChecked) {
      newSkills.push(value);
    } else {
      _.pull(newSkills, value);
    }
    setSkillIds(newSkills);
  };

  const inputIsValid = !emailError
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
    if (inputIsValid) {
      signUp({
        email,
        username,
        password,
        bio,
        locationId,
        skillIds,
      }).then(() => {
        window.location.href = '/login';
      }).catch(({ constraint }) => {
        setErrorMessage(constraint);
      });
    }
  };

  return (
    <div>
      <h5>
        {errorMessage}
      </h5>
      <form onSubmit={submitSignUp}>
        <input type="email" name="email" placeholder="email" onChange={e => handleTextInput(e.target)} />
        <p>{emailError}</p>
        <input type="text" name="username" placeholder="username" onChange={e => handleTextInput(e.target)} />
        <p>{usernameError}</p>
        <input type="text" name="bio" placeholder="bio" onChange={e => handleTextInput(e.target)} />
        <p>{bioError}</p>
        <input type="password" name="password" placeholder="password" onChange={e => handleTextInput(e.target)} />
        <p>{passwordError}</p>
        <input type="password" name="secondPassword" placeholder="password" onChange={e => handleTextInput(e.target)} />
        <p>{secondPasswordError}</p>
        <LocationSelector handleSelect={setLocationId} />
        <SkillsSelector handleCheckboxInput={handleCheckboxInput} />
        <input type="submit" />
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default SignupForm;
