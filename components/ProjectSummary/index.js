import { projectShape } from '~lib/shapes';

const ProjectSummary = ({
  owner,
  name,
  description,
  inspiredBy,
  assets,
  contact,
  location,
  neededSkills,
}) => (
  <div>
    <h1>{owner}</h1>
    <h1>{name}</h1>
    <h1>{description}</h1>
    <h1>{inspiredBy}</h1>
    <h1>{assets}</h1>
    <h1>{JSON.stringify(contact)}</h1>
    <h1>{location}</h1>
    <h1>{JSON.stringify(neededSkills)}</h1>
  </div>
);

ProjectSummary.propTypes = projectShape;

ProjectSummary.defaultProps = {
  owner: null,
  id: null,
  name: null,
  description: null,
  inspiredBy: null,
  assets: null,
  contact: {},
  location: null,
  neededSkills: [],
};

export default ProjectSummary;
