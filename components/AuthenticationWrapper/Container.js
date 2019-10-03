import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper';
import { authenticateFromToken } from '~store/authentication/actions';

const mapDispatchToProps = { authenticateFromToken };

export default connect(() => ({}), mapDispatchToProps)(AuthenticationWrapper);
