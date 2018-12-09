import { put, takeEvery, call } from 'redux-saga/effects';

import { actions as types } from './index';
import { getDrugGroup, getDrugsList, getDrugInfo } from '../../../http/oveview/drugs';

function* onGetDrugListGroupData() {
  try {
    const { data } = yield call(getDrugGroup);
    yield put(types.getDrugsGroupDataSuccess(data));
  } catch (error) {
    yield put(types.getDrugsGroupDataFailure(error));
  }
}

function* onGetDrugListData({ payload }) {
  try {
    const { data } = yield call(getDrugsList, payload);
    yield put(types.getListOfDrugsSuccess(data));
  } catch (error) {
    yield put(types.getListOfDrugsFailure(error));
  }
}

function* onGetDrugData({ payload }) {
  try {
    const { data } = yield call(getDrugInfo, payload);
    yield put(types.getDrugInfoSuccess(data));
  } catch (error) {
    yield put(types.getDrugInfoFailure(error));
  }
}

const drugsGroupSagas = [
  takeEvery(types.getDrugsGroupDataRequest, onGetDrugListGroupData),
  takeEvery(types.getListOfDrugsRequest, onGetDrugListData),
  takeEvery(types.getDrugInfoRequest, onGetDrugData),
];

export default drugsGroupSagas;
