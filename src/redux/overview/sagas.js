import { put, takeEvery, call } from 'redux-saga/effects';

import { actions as types } from './index';
import getData from '../../http/oveview';

function* onGerOverviewData() {
  try {
    const { data } = yield call(getData);
    yield put(types.getOverviewDataSuccess(data));
  } catch (error) {
    yield put(types.getOverviewDataFailure(error));
  }
}

const overviewSagas = [
  takeEvery(types.getOverviewDataRequest, onGerOverviewData),
];

export default overviewSagas;
