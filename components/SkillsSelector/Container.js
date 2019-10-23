import { connect } from 'react-redux';

import SkillsSelector from '~components/SkillsSelector';

const mapStateToProps = state => ({
  skills: state.attributes.skills,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SkillsSelector);
