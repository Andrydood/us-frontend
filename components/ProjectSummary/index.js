import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';
import styles from './styles.scss';

const ProjectSummary = ({
  owner,
  id,
  name,
  description,
  inspiredBy,
  assets,
  location,
  neededSkills,
  isFavorite,
  isOwner,
  toggleFavoriteProject,
  deleteProject,
}) => (
  <div className={styles.project}>
    {JSON.stringify(owner)}
    {JSON.stringify(id)}
    {JSON.stringify(name)}
    {JSON.stringify(description)}
    {JSON.stringify(inspiredBy)}
    {JSON.stringify(assets)}
    {JSON.stringify(location)}
    {JSON.stringify(neededSkills)}
    {JSON.stringify(isFavorite)}
    {JSON.stringify(isOwner)}
    {JSON.stringify(toggleFavoriteProject)}
    {JSON.stringify(deleteProject)}
  </div>
);

ProjectSummary.propTypes = {
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  inspiredBy: PropTypes.string,
  assets: PropTypes.string,
  location: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
  isFavorite: PropTypes.bool,
  isOwner: PropTypes.bool,
  toggleFavoriteProject: PropTypes.func,
  deleteProject: PropTypes.func,
};

ProjectSummary.defaultProps = {
  owner: null,
  id: null,
  name: null,
  description: null,
  inspiredBy: null,
  assets: null,
  location: null,
  neededSkills: [],
  isFavorite: false,
  isOwner: false,
  toggleFavoriteProject: () => {},
  deleteProject: () => {},
};

export default ProjectSummary;
