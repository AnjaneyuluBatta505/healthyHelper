import { combineReducers } from 'redux';

import { reduser } from './auth/handlers';

const rootReducer = combineReducers({
  reduser,
});

export default rootReducer;
