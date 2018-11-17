import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import AppNavigator from '../router';

import auth from './auth/index';
import overview from './overview';
import drugs from './overview/drugs';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  auth,
  overview,
  drugs,
});

export default rootReducer;
