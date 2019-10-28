import { connect } from 'react-redux';

import NewProjectForm from '~components/NewProjectForm';
import { createProject } from '~store/newProjectPage/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = { createProject };

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
