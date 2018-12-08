import { put, takeEvery, call } from 'redux-saga/effects';

import { actions as types } from './index';
import { actions as drugListActions } from './drugs/index';
import getData from '../../http/oveview';

function* onGerOverviewData() {
  try {
    const { data } = yield call(getData);
    yield put(types.getOverviewDataSuccess(data));
    const drugsData = data.filter(({ _id }) => _id === '5c0ba9aea3dff21158cf33f8')[0].data;
    yield put(drugListActions.getDrugsDataRequest(drugsData));
  } catch (error) {
    yield put(types.getOverviewDataFailure(error));
  }
}

const overviewSagas = [
  takeEvery(types.getOverviewDataRequest, onGerOverviewData),
];

export default overviewSagas;
