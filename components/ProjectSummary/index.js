import PropTypes from 'prop-types';
import { Fragment } from 'react';
import {
  Heart,
  Trash,
} from 'react-feather';
import classnames from 'classnames';
import { skillShape } from '~lib/shapes';
import { timeFromCreation } from '~lib/helpers';
import pageTypes from '~lib/pageTypes';
import Card from '~components/Card';
import SkillBubble from '~components/SkillBubble';
import Link from '~components/Link/Container';
import LoadingWrapper from '~components/LoadingWrapper';
import styles from './styles.scss';

const ProjectSummary = ({
  owner,
  id,
  name,
  description,
  inspiredBy,
  assets,
  location,
  neededSkills,
  isFavorite,
  isOwner,
  toggleFavoriteProject,
  deleteProject,
  createdAt,
  likes,
  goToConversation,
  isFetching,
}) => (
  <LoadingWrapper isLoading={isFetching}>
    <div>
      <Card>
        <div className={styles.firstLine}>{name}</div>
        <div className={styles.secondLine}>
          <Link href="/user/[username]" as={`/user/${owner}`} pageType={pageTypes.profile} className={styles.username}>
            {owner}
          </Link>
          {` · ${location} · ${timeFromCreation(createdAt)}`}
        </div>

        <div className={styles.header}>Looking For</div>
        <div className={styles.skills}>
          {neededSkills.map(skill => <SkillBubble name={skill.name} id={skill.id} key={skill.id} />)}
        </div>

        <div className={styles.header}>Details</div>
        <div className={styles.text}>{description}</div>

        {inspiredBy ? (
          <Fragment>
            <div className={styles.header}>Inspired By</div>
            <div className={styles.text}>{inspiredBy}</div>
          </Fragment>
        ) : null}


        {assets ? (
          <Fragment>
            <div className={styles.header}>Current Assets</div>
            <div className={styles.text}>{assets}</div>
          </Fragment>
        ) : null}

        <div className={styles.likes}>{`${likes || 0} ${likes === 1 ? 'Like' : 'Likes'}`}</div>

        <div className={styles.links}>
          <button type="button" onClick={() => toggleFavoriteProject(id)}>
            <Heart className={classnames(styles.link, { [styles.isFavorite]: isFavorite })} />
          </button>
          {isOwner ? (
            <button className={styles.trash} type="button" onClick={() => deleteProject(id)}>
              <Trash className={classnames(styles.link)} />
            </button>
          ) : null}
        </div>
      </Card>
      {isOwner ? null : (
        <button type="button" className={styles.contactButton} onClick={() => goToConversation(id)}>
      Contact Owner of Project
        </button>
      )}
    </div>
  </LoadingWrapper>
);

ProjectSummary.propTypes = {
  owner: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  inspiredBy: PropTypes.string,
  createdAt: PropTypes.string,
  assets: PropTypes.string,
  location: PropTypes.string,
  neededSkills: PropTypes.arrayOf(skillShape),
  isFavorite: PropTypes.bool,
  isOwner: PropTypes.bool,
  toggleFavoriteProject: PropTypes.func,
  deleteProject: PropTypes.func,
  goToConversation: PropTypes.func,
  likes: PropTypes.number,
  isFetching: PropTypes.bool,
};

ProjectSummary.defaultProps = {
  owner: '-',
  id: null,
  name: null,
  description: null,
  inspiredBy: null,
  createdAt: null,
  assets: null,
  location: null,
  neededSkills: [],
  isFavorite: false,
  isOwner: false,
  likes: null,
  isFetching: true,
  toggleFavoriteProject: () => {},
  goToConversation: () => {},
  deleteProject: () => {},
};

export default ProjectSummary;
