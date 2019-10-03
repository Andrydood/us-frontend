import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthenticationWrapper = ({ authenticateFromToken, children }) => {
  useEffect(() => authenticateFromToken(), []);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

AuthenticationWrapper.propTypes = {
  authenticateFromToken: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default AuthenticationWrapper;
