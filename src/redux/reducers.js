import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import AppNavigator from '../router';

import authActions from './auth/index';
import overActions from './overview';

const navReducer = createNavigationReducer(AppNavigator);

const reducer = combineReducers({
  auth: authActions,
  overActions,
});

const rootReducer = combineReducers({
  nav: navReducer,
  reducer,
});

export default rootReducer;
