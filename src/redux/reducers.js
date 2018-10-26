import { combineReducers } from 'redux';

import { action } from './auth/handlers';

const rootReducer = combineReducers({
  action,
});

export default rootReducer;
