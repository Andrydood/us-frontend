import PropTypes from 'prop-types';
import ProjectCard from '~components/ProjectCard';

const ProjectList = ({ projects }) => (
  <div>
    { projects
      ? projects.map(project => (
        <ProjectCard
          name={project.name}
          id={project.id}
          key={project.id}
        />
      )) : null}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default ProjectList;
