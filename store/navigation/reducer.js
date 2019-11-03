import { createReducer } from '~lib/redux';

import {
  SET_PAGE_TYPE,
} from '~store/navigation/actionTypes';

const initialState = {
  pageType: null,
};

const reducer = createReducer(initialState, {
  [SET_PAGE_TYPE]: (state, { payload }) => ({
    ...state,
    pageType: payload.pageType,
  }),
});

export default reducer;
