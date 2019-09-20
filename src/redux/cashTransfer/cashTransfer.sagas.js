import { put, takeLatest, call } from 'redux-saga/effects';
import CashTransfer from '../../services/apis/CashTransfer';
import types from './cashTransfer.types';
import { actionCreator } from '../../utils/generators';

function* init(initAction) {
  try {
    const response = yield call(new CashTransfer().init, initAction.payload);
    localStorage.setItem('otpId', response.data.otpId);
    yield put({
      type: actionCreator('res', types.INIT_CASH_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.INIT_CASH_TRANSFER),
    });
  }
}
function* validate(validateAction) {
  try {
    const response = yield call(
      new CashTransfer().validate,
      validateAction.payload,
    );
    localStorage.setItem('VIRDATA', response.data);
    yield put({
      type: actionCreator('res', types.VALIDATE_CASH_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.VALIDATE_CASH_TRANSFER),
    });
  }
}
function* resendOtp(resendOtpAction) {
  try {
    const response = yield call(
      new CashTransfer().resendOtp,
      resendOtpAction.payload,
    );
    localStorage.setItem('otpId', response.data.otpId);
    yield put({
      type: actionCreator('res', types.RESEND_OTP_CASH_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.RESEND_OTP_CASH_TRANSFER),
    });
  }
}
function* getFavorites() {
  try {
    const favorites = yield call(new CashTransfer().getFavorites);
    yield put({
      type: actionCreator('res', types.GET_FAVORITES_CASH_TRANSFER),
      payload: favorites,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.GET_FAVORITES_CASH_TRANSFER),
    });
  }
}

function* getHistory() {
  try {
    const history = yield call(new CashTransfer().getHistoryTransfert);
    yield put({
      type: actionCreator('res', types.GET_HISTORY_CASH_TRANSFER),
      payload: history,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.GET_HISTORY_CASH_TRANSFER),
    });
  }
}
export function* cashTransferSagas() {
  yield takeLatest(actionCreator('req', types.INIT_CASH_TRANSFER), init);
  yield takeLatest(
    actionCreator('req', types.VALIDATE_CASH_TRANSFER),
    validate,
  );
  yield takeLatest(
    actionCreator('req', types.RESEND_OTP_CASH_TRANSFER),
    resendOtp,
  );
  yield takeLatest(
    actionCreator('req', types.GET_FAVORITES_CASH_TRANSFER),
    getFavorites,
  );
  yield takeLatest(
    actionCreator('req', types.GET_HISTORY_CASH_TRANSFER),
    getHistory,
  );
}
