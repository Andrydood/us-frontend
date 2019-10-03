import { connect } from 'react-redux';

import ProjectList from '~components/ProjectList';
import { getProjectList } from '~store/projectList/actions';

const mapStateToProps = state => ({
  projects: state.projectList.projects,
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getProjectList };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
