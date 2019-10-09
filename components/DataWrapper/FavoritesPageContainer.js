import { connect } from 'react-redux';

import DataWrapper from '~components/DataWrapper';
import { getFavoriteProjects } from '~store/favoritesPage/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
const mapDispatchToProps = { getData: getFavoriteProjects };

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
