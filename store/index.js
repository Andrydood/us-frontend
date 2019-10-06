import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import authentication from '~store/authentication/reducer';
import browsePage from '~store/browsePage/reducer';
import favoritesPage from '~store/favoritesPage/reducer';
import profilePage from '~store/profilePage/reducer';

const reducers = combineReducers({
  authentication, browsePage, favoritesPage, profilePage,
});
const makeStore = initialState => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-undef
    typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

export default makeStore;
