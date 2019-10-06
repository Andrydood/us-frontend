import { useEffect } from 'react';
import PropTypes from 'prop-types';

const ProjectSummary = ({
  isAuthenticated,
  getProjectData,
  projectId,
  name,
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      getProjectData(projectId);
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

ProjectSummary.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getProjectData: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProjectSummary;
