import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';

const LocationSelector = ({ handleSelect }) => {
  const onSuggestSelect = (place) => {
    const { label, placeId, location: coordinates } = place;
    handleSelect({ label, placeId, coordinates });
  };
  return <Geosuggest placeDetailFields={[]} types={['(regions)']} onSuggestSelect={onSuggestSelect} />;
};

LocationSelector.propTypes = {
  handleSelect: PropTypes.func,
};

LocationSelector.defaultProps = {
  handleSelect: () => {},
};

export default LocationSelector;
