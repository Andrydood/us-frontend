import PropTypes from 'prop-types';
import {
  Heart,
} from 'react-feather';
import Link from '~components/Link/Container';
import SkillBubble from '~components/SkillBubble';
import Card from '~components/Card';
import pageTypes from '~lib/pageTypes';
import { skillShape } from '~lib/shapes';
import { timeFromCreation } from '~lib/helpers';
import styles from './styles.scss';

const ProjectCard = ({
  owner,
  location,
  neededSkills,
  name,
  id,
  createdAt,
  likes,
}) => (
  <Link href="/project/[id]" as={`/project/${id}`} pageType={pageTypes.project} className={styles.link}>
    <Card>
      <span className={styles.firstLine}>
        <span className={styles.firstLineContents}>
          <span className={styles.name}>{name}</span>
          <span className={styles.likes}>
            {likes || 0}
            <Heart size={13} className={styles.heart} />
          </span>
        </span>
      </span>
      <span className={styles.secondLine}>
        <span>{`${owner} · ${location ? location.label : null} · ${timeFromCreation(createdAt)}`}</span>
      </span>
      <span>
        {neededSkills.map(skill => <SkillBubble name={skill.name} id={skill.id} key={skill.id} />)}
      </span>
    </Card>
  </Link>
);

ProjectCard.propTypes = {
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.string,
};

ProjectCard.defaultProps = {
  owner: null,
  id: null,
  name: null,
  location: null,
  neededSkills: [],
  likes: '0',
};

export default ProjectCard;
