import Link from 'next/link';
import PropTypes from 'prop-types';
import { skillShape } from '~lib/shapes';

const ProjectCard = ({
  owner,
  location,
  neededSkills,
  name,
  id,
}) => (
  <div>
    <Link href="/project/[id]" as={`/project/${id}`}>
      <a>
        {JSON.stringify({
          owner, location, neededSkills, name, id,
        })}
      </a>
    </Link>
  </div>
);

ProjectCard.propTypes = {
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
};

ProjectCard.defaultProps = {
  owner: null,
  id: null,
  name: null,
  location: null,
  neededSkills: [],
};

export default ProjectCard;
