import PropTypes from 'prop-types';

const ProjectSummary = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
);

ProjectSummary.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectSummary;
