import { connect } from 'react-redux';

import ProjectSummary from '~components/ProjectSummary';
import { toggleFavoriteProject, deleteProject } from '~store/projectPage/actions';

const mapStateToProps = state => ({
  owner: state.projectPage.owner,
  id: state.projectPage.id,
  name: state.projectPage.name,
  description: state.projectPage.description,
  inspiredBy: state.projectPage.inspiredBy,
  assets: state.projectPage.assets,
  location: state.projectPage.location,
  neededSkills: state.projectPage.neededSkills,
  isFavorite: state.projectPage.isFavorite,
  isOwner: state.projectPage.isOwner,
});
const mapDispatchToProps = { toggleFavoriteProject, deleteProject };

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary);
