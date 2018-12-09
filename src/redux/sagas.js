import { all } from 'redux-saga/effects';

import overviewSagas from './overview/sagas';
import drugsGroupSagas from './overview/drugs/sagas';

export default function* root() {
  yield all([
    ...overviewSagas,
    ...drugsGroupSagas,
  ]);
}
