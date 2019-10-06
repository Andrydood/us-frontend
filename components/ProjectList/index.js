import PropTypes from 'prop-types';
import ProjectCard from '~components/ProjectCard';

const ProjectList = ({ projects }) => (
  <div>
    { projects
      ? projects.map(project => <ProjectCard name={project.name} key={project.id} />)
      : null }
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
