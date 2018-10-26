import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  AUTHENTICATE_REQUEST: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  ACTION: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.action, handlers.action],
  ]),
  initialState,
);

export default reducer;
