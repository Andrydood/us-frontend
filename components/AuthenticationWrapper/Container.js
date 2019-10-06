import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper';
import { authenticateFromToken } from '~store/authentication/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { authenticateFromToken };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
