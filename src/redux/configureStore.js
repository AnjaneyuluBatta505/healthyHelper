import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

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
  const store = createStoreWithMiddleware(rootReducer, initialState);
  sagaMiddleware.run(rootSaga);
  return store;
}
