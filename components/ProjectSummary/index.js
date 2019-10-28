import PropTypes from 'prop-types';
import Link from 'next/link';

import { skillShape } from '~lib/shapes';

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
  <div>
    <Link href={`/user/${owner}`}><a>{JSON.stringify({ owner })}</a></Link>
    <h1>{JSON.stringify({ name })}</h1>
    <h1>{JSON.stringify({ description })}</h1>
    <h1>{JSON.stringify({ inspiredBy })}</h1>
    <h1>{JSON.stringify({ assets })}</h1>
    <h1>{JSON.stringify({ location })}</h1>
    <h1>{JSON.stringify(neededSkills)}</h1>
    <h1>{JSON.stringify({ isFavorite })}</h1>
    <button type="button" onClick={() => toggleFavoriteProject(id)}>Toggle Favorite</button>
    {isOwner ? <button type="button" onClick={() => deleteProject(id)}>Delete</button> : null}
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
