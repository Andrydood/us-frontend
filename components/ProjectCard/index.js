import PropTypes from 'prop-types';
import Link from 'next/link';

const ProjectCard = ({ name, id }) => (
  <div>
    <Link href="/project/[id]" as={`/project/${id}`}><a>{name}</a></Link>
  </div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProjectCard;
