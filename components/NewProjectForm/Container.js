import { connect } from 'react-redux';

import NewProjectForm from '~components/NewProjectForm';

const mapStateToProps = state => ({
  token: state.authentication.token,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);
