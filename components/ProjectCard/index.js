import PropTypes from 'prop-types';
import Link from '~components/Link/Container';
import pageTypes from '~lib/pageTypes';
import { skillShape } from '~lib/shapes';
import styles from './styles.scss';

const ProjectCard = ({
  owner,
  location,
  neededSkills,
  name,
  id,
}) => (
  <Link href="/project/[id]" as={`/project/${id}`} pageType={pageTypes.project} className={styles.container}>
    <div className={styles.card}>
      <span className={styles.name}>{name}</span>
      <span className={styles.owner}>{owner}</span>
    </div>
  </Link>
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
