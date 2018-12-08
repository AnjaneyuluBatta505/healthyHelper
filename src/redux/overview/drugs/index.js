import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_DRUGS_DATA_REQUEST: undefined,
  GET_DRUGS_DATA_SUCCESS: undefined,
  GET_DRUGS_DATA_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getDrugsDataRequest, handlers.getDrugsDataRequest],
  ]),
  initialState,
);

export default reducer;
