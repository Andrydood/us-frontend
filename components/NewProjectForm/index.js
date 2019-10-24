import { useState } from 'react';
import PropTypes from 'prop-types';

import request from '~lib/request';

import LocationSelector from '~components/LocationSelector/Container';
import SkillsSelector from '~components/SkillsSelector/Container';

const NewProjectForm = ({ token }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [inspiredBy, setInspiredBy] = useState('');
  const [assets, setAssets] = useState('');
  const [locationId, setLocationId] = useState(1);
  const [skillIds, setSkillIds] = useState([]);

  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [inspiredByError, setInspiredByError] = useState('');
  const [assetsError, setAssetsError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextInput = (target) => {
    const { name: formName, value } = target;

    switch (formName) {
      case 'name':
        if (value.length <= 3) {
          setNameError('Name is too short');
        } else if (value.length > 100) {
          setNameError('Name is too long');
        } else {
          setNameError('');
        }
        setName(value);
        break;
      case 'description':
        if (value.length <= 50) {
          setDescriptionError('Description is too short');
        } else if (value.length > 5000) {
          setDescriptionError('Description is too long');
        } else {
          setDescriptionError('');
        }
        setDescription(value);
        break;
      case 'inspiredBy':
        if (value.length > 5000) {
          setInspiredByError('Too much text');
        } else {
          setInspiredByError('');
        }
        setInspiredBy(value);
        break;
      case 'assets':
        if (value.length > 5000) {
          setAssetsError('Too much text');
        } else {
          setAssetsError('');
        }
        setAssets(value);
        break;
      default:
        break;
    }
  };

  const inputIsValid = () => !nameError
  && !descriptionError
  && !inspiredByError
  && !assetsError
  && !!name
  && !!description
  && skillIds.length > 0;

  const submitForm = (e) => {
    e.preventDefault();
    if (inputIsValid()) {
      request.createProject({
        name,
        description,
        inspiredBy,
        assets,
        locationId,
        skillsNeeded: skillIds,
      }, token).then(({ id }) => {
        window.location.href = `/project/${id}`;
      }).catch(({ message }) => {
        setErrorMessage(message);
      });
    } else if (skillIds.length === 0) {
      setErrorMessage('Select at least 1 skill');
    }
  };

  return (
    <div>
      <h5>{errorMessage}</h5>
      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder="name (required)" onChange={e => handleTextInput(e.target)} required />
        <p>{nameError}</p>
        <textarea name="description" placeholder="description (required) (min 50)" onChange={e => handleTextInput(e.target)} required />
        <p>{descriptionError}</p>
        <textarea name="inspiredBy" placeholder="Inspired By" onChange={e => handleTextInput(e.target)} />
        <p>{inspiredByError}</p>
        <textarea name="assets" placeholder="Assets" onChange={e => handleTextInput(e.target)} />
        <p>{assetsError}</p>
        <LocationSelector handleSelect={setLocationId} />
        <p>Skills (select at least one)</p>
        <SkillsSelector currentSkillIds={skillIds} setSkillIds={setSkillIds} />
        <input type="submit" />
      </form>
    </div>
  );
};

NewProjectForm.propTypes = {
  token: PropTypes.string.isRequired,
};

export default NewProjectForm;
