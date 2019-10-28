import { Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { skillShape } from '~lib/shapes';

const SkillsSelector = ({ skills, currentSkillIds, setSkillIds }) => {
  const handleCheckboxInput = (value, isChecked) => {
    const newSkills = currentSkillIds;
    if (isChecked) {
      newSkills.push(value);
    } else {
      _.pull(newSkills, value);
    }
    setSkillIds(newSkills);
  };

  return (
    <div>
      {skills.map(({ id, name }) => (
        <Fragment key={id}>
          <input
            type="checkbox"
            name="skill"
            value={id}
            onChange={e => handleCheckboxInput(e.target.value, e.target.checked)}
          />
          {name}
          <br />
        </Fragment>
      ))}
    </div>
  );
};

SkillsSelector.propTypes = {
  setSkillIds: PropTypes.func.isRequired,
  currentSkillIds: PropTypes.arrayOf(PropTypes.number),
  skills: PropTypes.arrayOf(skillShape),
};

SkillsSelector.defaultProps = {
  currentSkillIds: [],
  skills: [],
};

export default SkillsSelector;
