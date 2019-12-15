import PropTypes from 'prop-types';
import Geosuggest from 'react-geosuggest';
import styles from './styles.scss';

const LocationSelector = ({ handleSelect }) => {
  const onSuggestSelect = (place) => {
    if (place) {
      const { label, placeId, location: coordinates } = place;
      handleSelect({ label, placeId, coordinates });
    }
  };

  return (
    <Geosuggest
      placeDetailFields={[]}
      types={['(regions)']}
      onSuggestSelect={onSuggestSelect}
      className={styles.geosuggest}
      inputClassName={styles.inputClass}
      suggestsClassName={styles.suggestsClass}
      suggestItemClassName={styles.suggestItem}
      suggestItemActiveClassName={styles.suggestItemActiveClass}
      autoActivateFirstSuggest
    />
  );
};

LocationSelector.propTypes = {
  handleSelect: PropTypes.func,
};

LocationSelector.defaultProps = {
  handleSelect: () => {},
};

export default LocationSelector;
