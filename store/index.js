import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import authentication from '~store/authentication/reducer';

const reducers = combineReducers({ authentication });
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
