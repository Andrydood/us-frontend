import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import authentication from '~store/authentication/reducer';
import attributes from '~store/attributes/reducer';
import browsePage from '~store/browsePage/reducer';
import favoritesPage from '~store/favoritesPage/reducer';
import profilePage from '~store/profilePage/reducer';
import projectPage from '~store/projectPage/reducer';
import navigation from '~store/navigation/reducer';
import socketIo from '~store/socketIo/reducer';
import chatPage from '~store/chatPage/reducer';
import messagesPage from '~store/messagesPage/reducer';

const reducers = combineReducers({
  authentication,
  attributes,
  browsePage,
  favoritesPage,
  profilePage,
  projectPage,
  navigation,
  socketIo,
  chatPage,
  messagesPage,
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
