import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_DATA_BY_STRING_REQUEST: undefined,
  GET_DATA_BY_STRING_SUCCESS: undefined,
  GET_DATA_BY_STRING_FAILURE: undefined,
  SET_SEARCH_STRING: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getDataByStringRequest, handlers.getDataByStringRequest],
    [actions.getDataByStringSuccess, handlers.getDataByStringSuccess],
    [actions.getDataByStringFailure, handlers.getDataByStringFailure],

    [actions.setSearchString, handlers.setSearchString],
  ]),
  initialState,
);

export default reducer;
