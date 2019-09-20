import { all, call } from 'redux-saga/effects';
import { accountsSagas } from './accounts/accounts.sagas';
import { operationsSagas } from './operations/operations.sagas';
import { authSagas } from './auth/auth.sagas';
import { beneficiariesSagas } from './beneficiaries/beneficiaries.sagas';
import { transferSagas } from './transfer/transfer.sagas';
import { cashTransferSagas } from './cashTransfer/cashTransfer.sagas';

export default function* rootSaga() {
  yield all([
    call(accountsSagas),
    call(operationsSagas),
    call(authSagas),
    call(beneficiariesSagas),
    call(transferSagas),
    call(cashTransferSagas),
  ]);
}
