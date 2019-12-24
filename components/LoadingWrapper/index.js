import { Fragment } from 'react';
import PropTypes from 'prop-types';

const LoadingWrapper = ({ isLoading, children }) => (
  <Fragment>
    {isLoading ? <div /> : children }
  </Fragment>
);

LoadingWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingWrapper;
