import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const AuthenticationWrapper = ({
  authenticationFunction,
  children,
  redirectOnFail,
}) => {
  useEffect(() => {
    authenticationFunction(redirectOnFail);
  }, []);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

AuthenticationWrapper.propTypes = {
  authenticationFunction: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  redirectOnFail: PropTypes.bool,
};

AuthenticationWrapper.defaultProps = {
  redirectOnFail: false,
};

export default AuthenticationWrapper;
