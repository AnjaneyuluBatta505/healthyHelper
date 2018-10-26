import { combineReducers } from 'redux';
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import AppNavigator from 'router';

import { action } from './auth/handlers';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  action,
});

export default rootReducer;
