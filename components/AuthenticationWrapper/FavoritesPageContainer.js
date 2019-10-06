import { connect } from 'react-redux';

import AuthenticationWrapper from '~components/AuthenticationWrapper/Container';
import { getFavoriteProjects } from '~store/favoritesPage/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { afterAuthentication: getFavoriteProjects };

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationWrapper);
