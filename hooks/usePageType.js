import { useDispatch } from 'react-redux';
import { setPageType } from '~store/navigation/actions';

const usePageType = (pageType) => {
  const dispatch = useDispatch();

  dispatch(setPageType(pageType));
};

export default usePageType;
