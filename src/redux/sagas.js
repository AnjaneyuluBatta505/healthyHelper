import { all, fork } from 'redux-saga/effects';

import overviewSagas from './overview/sagas';
import drugsGroupSagas from './overview/drugs/sagas';
import integrationSagas from './overview/drugs/integration/sagas';
import watchFailure from './snackbar/sagas';

export default function* root() {
  yield all([
    ...overviewSagas,
    ...drugsGroupSagas,
    fork(integrationSagas),
    fork(watchFailure),
  ]);
}
