import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import AppNavigator from '../router';

import auth from './auth/index';
import overview from './overview';
import drugs from './overview/drugs';
import intagration from './overview/drugs/integration';
import snackbar from './snackbar';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  auth,
  overview,
  drugs,
  intagration,
  snackbar,
});

export default rootReducer;
