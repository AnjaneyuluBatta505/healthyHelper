import { handleActions, createActions } from 'redux-actions';

import initialState, * as handlers from './handlers';

export const actions = createActions({
  GET_DRUGS_GROUP_DATA_REQUEST: undefined,
  GET_DRUGS_GROUP_DATA_SUCCESS: undefined,
  GET_DRUGS_GROUP_DATA_FAILURE: undefined,

  GET_LIST_OF_DRUGS_REQUEST: undefined,
  GET_LIST_OF_DRUGS_SUCCESS: undefined,
  GET_LIST_OF_DRUGS_FAILURE: undefined,

  GET_DRUG_INFO_REQUEST: undefined,
  GET_DRUG_INFO_SUCCESS: undefined,
  GET_DRUG_INFO_FAILURE: undefined,
});

const reducer = handleActions(
  new Map([
    [actions.getDrugsGroupDataRequest, handlers.getDrugsGroupDataRequest],
    [actions.getDrugsGroupDataSuccess, handlers.getDrugsGroupDataSuccess],
    [actions.getDrugsGroupDataFailure, handlers.getDrugsGroupDataFailure],

    [actions.getListOfDrugsRequest, handlers.getListOfDrugsRequest],
    [actions.getListOfDrugsSuccess, handlers.getListOfDrugsSuccess],
    [actions.getListOfDrugsFailure, handlers.getListOfDrugsFailure],

    [actions.getDrugInfoRequest, handlers.getDrugInfoRequest],
    [actions.getDrugInfoSuccess, handlers.getDrugInfoSuccess],
    [actions.getDrugInfoFailure, handlers.getDrugInfoFailure],
  ]),
  initialState,
);

export default reducer;
