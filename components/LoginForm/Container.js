import { connect } from 'react-redux';

import LoginForm from '~components/LoginForm';
import { authenticateFromInput } from '~store/authentication/actions';

const mapStateToProps = state => ({ isAuthenticated: state.authentication.isAuthenticated });
const mapDispatchToProps = { authenticateFromInput };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
