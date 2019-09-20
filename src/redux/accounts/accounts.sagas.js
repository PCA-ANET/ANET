import { put, takeLatest, call, select } from 'redux-saga/effects';
import Accounts from '../../services/apis/accounts';
import { actionCreator } from '../../utils/generators';
import { getSelectedAccountNumber } from './accounts.selectors';
import AccountsActionTypes from './accounts.types';

function* getAccounts(action) {
  try {
    const accounts = yield call(new Accounts().getAccounts);
    yield put({
      type: actionCreator('res', AccountsActionTypes.GET_ACCOUNTS),
      payload: accounts,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', AccountsActionTypes.GET_ACCOUNTS),
    });
  }
}

function* getSignaletic() {
  try {
    const accountNumber = yield select(getSelectedAccountNumber);
    const signaletic = yield call(new Accounts().getSignaletic, accountNumber);
    yield put({
      type: actionCreator('res', AccountsActionTypes.GET_SIGNALETIC),
      payload: signaletic,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', AccountsActionTypes.GET_SIGNALETIC),
    });
  }
}

export function* accountsSagas() {
  yield takeLatest(
    actionCreator('req', AccountsActionTypes.GET_ACCOUNTS),
    getAccounts,
  );
  yield takeLatest(
    actionCreator('req', AccountsActionTypes.GET_SIGNALETIC),
    getSignaletic,
  );
}
