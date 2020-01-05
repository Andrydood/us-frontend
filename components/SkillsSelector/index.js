import PropTypes from 'prop-types';
import { useState } from 'react';
import Autosuggest from 'react-autosuggest';

import SkillBubble from '~components/SkillBubble';
import { skillShape } from '~lib/shapes';
import styles from './styles.scss';

const getSuggestions = (skills, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? skills
    : skills.filter(skill => skill.name.toLowerCase().slice(0, inputLength) === inputValue);
    //change this to be anywhere in the phrase
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


const SkillsSelector = ({ skills, onSkillsChange }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const removeSkill = (id) => {
    const index = selectedSkills.map(skill => skill.id).indexOf(id);
    if (index > -1) {
      const newSkills = selectedSkills;
      selectedSkills.splice(index, 1);
      setSelectedSkills(newSkills);
      onSkillsChange(newSkills);
    }
  };

  const addSkill = (newSkill) => {
    const isInArray = selectedSkills.map(skill => skill.id).includes(newSkill.id);
    if (!isInArray) {
      const newSkills = [...selectedSkills, newSkill];
      setSelectedSkills(newSkills);
      onSkillsChange(newSkills);
    }
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value: writtenValue }) => {
    setSuggestions(getSuggestions(skills, writtenValue));
  };

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const onSuggestionSelected = (event, { suggestion }) => {
    event.preventDefault();
    addSkill(suggestion);
    setSuggestions([]);
    setValue('');
  };

  const inputProps = {
    placeholder: 'Search for skills',
    value,
    onChange,
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
        shouldRenderSuggestions={() => true}
        theme={styles}
        highlightFirstSuggestion
      />
      <div>
        {selectedSkills.map(skill => <SkillBubble onClick={() => removeSkill(skill.id)} name={`${skill.name} \u00A0 ×`} id={skill.id} key={skill.id} />)}
      </div>
    </div>
  );
};

SkillsSelector.propTypes = {
  onSkillsChange: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(skillShape),
};

SkillsSelector.defaultProps = {
  skills: [],
};

export default SkillsSelector;
