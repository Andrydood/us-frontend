import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthenticationWrapper = ({
  authenticationFunction,
  isAuthenticated,
  afterAuthentication,
  children,
}) => {
  useEffect(() => {
    authenticationFunction();
  }, []);
  useEffect(() => {
    if (isAuthenticated) {
      afterAuthentication();
    }
  }, [isAuthenticated]);
  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

AuthenticationWrapper.propTypes = {
  authenticationFunction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  afterAuthentication: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


AuthenticationWrapper.defaultProps = {
  afterAuthentication: () => {},
};

export default AuthenticationWrapper;
