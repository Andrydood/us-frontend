import { useDispatch, useSelector } from 'react-redux';

const useData = (settings = {}) => {
  const {
    getData = () => {},
    needsAuthentication = false,
  } = settings;

  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
  const dispatch = useDispatch();

  if (isAuthenticated && needsAuthentication) {
    dispatch(getData());
  }

  if (!needsAuthentication) {
    dispatch(getData());
  }
};

export default useData;
