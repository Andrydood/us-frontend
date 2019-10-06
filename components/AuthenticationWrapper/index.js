import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthenticationWrapper = ({
  authenticateFromToken,
  isAuthenticated,
  getData,
  children,
}) => {
  useEffect(() => { authenticateFromToken(); }, []);
  useEffect(() => { getData(); }, [isAuthenticated]);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

AuthenticationWrapper.propTypes = {
  authenticateFromToken: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getData: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


AuthenticationWrapper.defaultProps = {
  getData: () => {},
};

export default AuthenticationWrapper;
