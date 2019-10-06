import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import { getProfileData } from '~store/profilePage/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { afterAuthentication: getProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
