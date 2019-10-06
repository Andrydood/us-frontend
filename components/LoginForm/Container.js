import { connect } from 'react-redux';

import LoginForm from '~components/LoginForm';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps)(LoginForm);
