import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  SHOW_ERROR: undefined,
  REMOVE_ERROR: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.showError, handlers.showError],
    [actions.removeError, handlers.removeError],
  ]),
  initialState,
);

export default reducer;
