import { put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { actions as types } from './index';
import { getDataBySubString } from '../../../../http/oveview/drugs';

function* onGetDrugListGroupData({ payload }) {
  try {
    yield delay(100);
    yield put(types.getDataByStringRequest());

    const { data } = yield call(getDataBySubString, payload);

    yield put(types.getDataByStringSuccess(data));
  } catch (error) {
    yield put(types.getDataByStringFailure(error));
  }
}

export default function* integrationSagas() {
  yield takeLatest(types.setSearchString, onGetDrugListGroupData);
}
