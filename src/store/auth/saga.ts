import { call, put, takeLatest, all } from 'redux-saga/effects';

// Graphql queries
import graphqlClient, { fetchNetworkOnly } from 'services/graphql-client';

import { WHOIS_QUERY } from 'store/auth/query';

import { actions } from 'store/auth';

export function* whois() {
  try {
    const {
      data: { whois },
    } = yield call(graphqlClient.query, {
      query: WHOIS_QUERY,
      fetchPolicy: fetchNetworkOnly,
    });

    yield put(actions.whoisSuccessAction(whois.orgDetails));
  } catch (err: any) {
    yield put(actions.whoisErrorAction(err?.message));
  }
}

export function* watchWhoisAdminManager() {
  yield takeLatest(actions.whoisAction.type, whois);
}

export default function* authSliceSaga() {
  yield all([watchWhoisAdminManager()]);
}
