import { put, takeLatest, call, select } from 'redux-saga/effects';
import { actionCreator } from '../../utils/generators';
import { getSelectedAccountId } from '../accounts/accounts.selectors';
import Accounts from '../../services/apis/accounts';
import OperationsActionTypes from './operations.types';

function* getOperations(action) {
  try {
    const operations = yield call(
      new Accounts().getOperations,
      yield select(getSelectedAccountId),
    );
    yield put({
      type: actionCreator('res', OperationsActionTypes.GET_OPERATIONS),
      payload: operations,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', OperationsActionTypes.GET_OPERATIONS),
    });
  }
}

export function* operationsSagas() {
  yield takeLatest(
    actionCreator('req', OperationsActionTypes.GET_OPERATIONS),
    getOperations,
  );
}
