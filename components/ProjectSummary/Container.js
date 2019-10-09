import { connect } from 'react-redux';

import ProjectSummary from '~components/ProjectSummary';

const mapStateToProps = state => ({
  name: state.projectPage.name,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
