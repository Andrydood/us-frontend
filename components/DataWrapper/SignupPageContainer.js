import { connect } from 'react-redux';

import DataWrapper from '~components/DataWrapper';
import { getAttributes } from '~store/attributes/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getData: getAttributes };

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
