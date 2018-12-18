import {
  put, takeEvery,
} from 'redux-saga/effects';

import { actions as types } from './index';

function* onFailureError() {
  yield put(types.showError('Somethink went wrong'));
}

export default function* watchFailure() {
  yield takeEvery(action => /SUCCESS/i.test(action.type), onFailureError);
}
