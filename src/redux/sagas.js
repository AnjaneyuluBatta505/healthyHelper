import { all } from 'redux-saga/effects';

import overviewSagas from './overview/sagas';

export default function* root() {
  yield all([
    ...overviewSagas,
  ]);
}
