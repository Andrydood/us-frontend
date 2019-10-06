import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import { getProfileData } from '~store/profilePage/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { getData: getProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
