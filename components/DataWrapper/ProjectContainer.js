import { connect } from 'react-redux';

import DataWrapper from '~components/DataWrapper';
import { getProjectData } from '~store/projectPage/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getData: getProjectData };

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
