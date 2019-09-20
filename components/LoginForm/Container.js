import { connect } from 'react-redux';

import LoginForm from '~components/LoginForm';
import { authenticateLogin } from '~store/authentication/actions';

const mapStateToProps = state => ({ state });
const mapDispatchToProps = { authenticateLogin };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
