import { connect } from 'react-redux';

import ProjectSummary from '~components/ProjectSummary';
import { getProjectData } from '~store/projectPage/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  name: state.projectPage.name,
});
const mapDispatchToProps = { getProjectData };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
