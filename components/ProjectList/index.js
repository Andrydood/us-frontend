import PropTypes from 'prop-types';

const ProjectList = ({ getProjectList, projects, isAuthenticated }) => {
  if (isAuthenticated && projects.length === 0) {
    getProjectList();
  }

  return (
    <div>
      <h1>{JSON.stringify(projects)}</h1>
    </div>
  );
};

ProjectList.propTypes = {
  getProjectList: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,

};

export default ProjectList;
