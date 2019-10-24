import { connect } from 'react-redux';

import LocationSelector from '~components/LocationSelector';

const mapStateToProps = state => ({
  locations: state.attributes.locations,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
