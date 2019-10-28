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
  handleSelect: PropTypes.func,
  locations: PropTypes.arrayOf(locationShape),
};

LocationSelector.defaultProps = {
  handleSelect: () => {},
  locations: [],
};

export default LocationSelector;
