import { connect } from 'react-redux';

import DataWrapper from '~components/DataWrapper';
import { getProfileData } from '~store/profilePage/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getData: getProfileData };

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
