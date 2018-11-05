import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
// import devToolsEnhancer from 'remote-redux-devtools';

import rootSaga from './sagas';
import rootReducer from './reducers';

const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  routerMiddleware,
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState, composeWithDevTools());
  sagaMiddleware.run(rootSaga);
  return store;
}
