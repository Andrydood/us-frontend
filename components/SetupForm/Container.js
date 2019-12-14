import { connect } from 'react-redux';

import { setupAccount } from '~store/setupPage/actions';

import SetupForm from '~components/SetupForm';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  setupAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetupForm);
