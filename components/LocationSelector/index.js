import PropTypes from 'prop-types';

import { locationShape } from '~lib/shapes';

const LocationSelector = ({ handleSelect, locations }) => (
  <select onChange={e => handleSelect(e.target.value)}>
    {locations.map(({ id, name }) => (
      <option value={id} key={id}>{name}</option>
    ))}
  </select>
);

LocationSelector.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  locations: PropTypes.arrayOf(locationShape).isRequired,
};

export default LocationSelector;
