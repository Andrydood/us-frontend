import { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

const DataWrapper = ({
  isAuthenticated,
  getData,
  children,
  needsAuthentication,
  dataId,
}) => {
  useEffect(() => {
    if (isAuthenticated && needsAuthentication) {
      getData(dataId);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (!needsAuthentication) {
      getData(dataId);
    }
  }, []);

  return (
    <Fragment>
      { children }
    </Fragment>
  );
};

DataWrapper.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  needsAuthentication: PropTypes.bool,
  getData: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  dataId: PropTypes.string,
};


DataWrapper.defaultProps = {
  getData: () => {},
  dataId: null,
  needsAuthentication: false,
};

export default DataWrapper;
