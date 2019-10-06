import { connect } from 'react-redux';

import ProjectList from '~components/ProjectList';

const mapStateToProps = state => ({
  projects: state.browsePage.projects,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
