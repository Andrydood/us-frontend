import { connect } from 'react-redux';

import SignupForm from '~components/SignupForm';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
