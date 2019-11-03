import {
  SET_PAGE_TYPE,
} from '~store/navigation/actionTypes';

export const setPageType = pageType => async (dispatch) => {
  dispatch({ type: SET_PAGE_TYPE, payload: { pageType } });
};
