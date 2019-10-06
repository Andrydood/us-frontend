import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import { getBrowseProjects } from '~store/browsePage/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { getData: getBrowseProjects };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
