import PropTypes from 'prop-types';

const ProjectCard = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProjectCard;
