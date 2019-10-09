import { connect } from 'react-redux';

import DataWrapper from '~components/DataWrapper';
import { getBrowseProjects } from '~store/browsePage/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getData: getBrowseProjects };

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
