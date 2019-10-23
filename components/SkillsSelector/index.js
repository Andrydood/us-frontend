import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { skillShape } from '~lib/shapes';

const SkillsSelector = ({ handleCheckboxInput, skills }) => (
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

SkillsSelector.propTypes = {
  handleCheckboxInput: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(skillShape).isRequired,
};

export default SkillsSelector;
