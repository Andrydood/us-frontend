import PropTypes from 'prop-types';
import { useState } from 'react';
import CardWithLogo from '~components/CardWithLogo';
import LocationSelector from '~components/LocationSelector';
import SkillsSelector from '~components/SkillsSelector/Container';
import styles from './styles.scss';

const SetupForm = ({
  setupAccount,
}) => {
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState(null);
  const [skillIds, setSkillIds] = useState([]);

  const [bioError, setBioError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBioInput = (target) => {
    const { value } = target;

    if (value.length > 500) {
      setBioError('Bio is too long');
    } else {
      setBioError('');
    }
    setBio(value);
  };

  const submitSetup = (e) => {
    e.preventDefault();
    if (!bioError && location) {
      setupAccount({ bio, location, skillIds });
    } else if (!location) {
      setErrorMessage('Please select a location');
    }
  };

  return (
    <CardWithLogo>
      <div className={styles.title}>Welcome! Tell us more about yourself!</div>
      <form onSubmit={submitSetup}>
        <div className={styles.input}>
          <p>Bio</p>
          <input placeholder="Bio" type="text" className={styles.field} onChange={e => handleBioInput(e.target)} />
        </div>
        <div className={styles.input}>
          <p>Location</p>
          <LocationSelector handleSelect={setLocation} />
        </div>
        <div className={styles.input}>
          <p>Skills</p>
          <SkillsSelector currentSkillIds={skillIds} setSkillIds={setSkillIds} />
        </div>
        <button type="submit" className={styles.submitButton}>Continue</button>
        <span className={styles.mainError}>{errorMessage}</span>
      </form>
    </CardWithLogo>
  );
};

SetupForm.propTypes = {
  setupAccount: PropTypes.func.isRequired,
};

export default SetupForm;
