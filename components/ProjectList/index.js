import PropTypes from 'prop-types';
import ProjectCard from '~components/ProjectCard';
import { projectShape } from '~lib/shapes';

const ProjectList = ({ projects }) => (
  <div>
    { projects
      ? projects.map(project => (
        <ProjectCard
          owner={project.owner}
          location={project.location}
          neededSkills={project.neededSkills}
          name={project.name}
          id={project.id}
          key={project.id}
        />
      )) : null}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(projectShape),
};

ProjectList.defaultProps = {
  projects: [],
};

export default ProjectList;
