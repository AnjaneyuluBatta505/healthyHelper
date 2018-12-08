import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_OVERVIEW_DATA_REQUEST: undefined,
  GET_OVERVIEW_DATA_SUCCESS: undefined,
  GET_OVERVIEW_DATA_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getOverviewDataRequest, handlers.getOverviewDataRequest],
    [actions.getOverviewDataSuccess, handlers.getOverviewDataSuccess],
    [actions.getOverviewDataFailure, handlers.getOverviewDataFailure],
  ]),
  initialState,
);

export default reducer;
