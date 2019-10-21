import { connect } from 'react-redux';

import ProjectSummary from '~components/ProjectSummary';

const mapStateToProps = state => ({
  owner: state.projectPage.owner,
  id: state.projectPage.id,
  name: state.projectPage.name,
  description: state.projectPage.description,
  inspiredBy: state.projectPage.inspiredBy,
  assets: state.projectPage.assets,
  contact: state.projectPage.contact,
  location: state.projectPage.location,
  neededSkills: state.projectPage.neededSkills,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
