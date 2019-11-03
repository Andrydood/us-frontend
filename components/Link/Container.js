import { connect } from 'react-redux';

import Link from '~components/Link';
import { setPageType } from '~store/navigation/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { setPageType };

export default connect(mapStateToProps, mapDispatchToProps)(Link);
