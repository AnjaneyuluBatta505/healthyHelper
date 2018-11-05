import { handleActions, createActions } from 'redux-actions';

import initialState from './handlers';

export const actions = createActions({
  GET_OVERVIEW_DATA_REQUEST: undefined,
  GET_OVERVIEW_DATA_SUCCESS: undefined,
  GET_OVERVIEW_DATA_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
  ]),
  initialState,
);

export default reducer;
