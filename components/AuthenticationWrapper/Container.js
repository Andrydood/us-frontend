import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper';
import { authenticateFromToken } from '~store/authentication/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { authenticationFunction: authenticateFromToken };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
