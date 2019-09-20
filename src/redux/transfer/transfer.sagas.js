import { put, takeLatest, call } from 'redux-saga/effects';
import Transfer from '../../services/apis/Transfer';
import types from './transfer.types';
import { actionCreator } from '../../utils/generators';

function* init(initAction) {
  try {
    const response = yield call(new Transfer().init, initAction.payload);
    localStorage.setItem('otpId', response.data.otpId);
    yield put({
      type: actionCreator('res', types.INIT_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.INIT_TRANSFER),
    });
  }
}
function* validate(validateAction) {
  try {
    const response = yield call(
      new Transfer().validate,
      validateAction.payload,
    );
    localStorage.setItem('VIRDATA', response.data);
    yield put({
      type: actionCreator('res', types.VALIDATE_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.VALIDATE_TRANSFER),
    });
  }
}
function* resendOtp(resendOtpAction) {
  try {
    const response = yield call(
      new Transfer().resendOtp,
      resendOtpAction.payload,
    );
    localStorage.setItem('otpId', response.data.otpId);
    yield put({
      type: actionCreator('res', types.RESEND_OTP_TRANSFER),
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.RESEND_OTP_TRANSFER),
    });
  }
}
function* getFavorites() {
  try {
    const favorites = yield call(new Transfer().getFavorites);
    yield put({
      type: actionCreator('res', types.GET_FAVORITES_TRANSFER),
      payload: favorites,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.GET_FAVORITES_TRANSFER),
    });
  }
}

function* getHistory() {
  try {
    const history = yield call(new Transfer().getHistory);
    yield put({
      type: actionCreator('res', types.GET_HISTORY_TRANSFER),
      payload: history,
    });
  } catch (error) {
    yield put({
      type: actionCreator('fail', types.GET_HISTORY_TRANSFER),
    });
  }
}
export function* transferSagas() {
  yield takeLatest(actionCreator('req', types.INIT_TRANSFER), init);
  yield takeLatest(actionCreator('req', types.VALIDATE_TRANSFER), validate);
  yield takeLatest(actionCreator('req', types.RESEND_OTP_TRANSFER), resendOtp);
  yield takeLatest(
    actionCreator('req', types.GET_FAVORITES_TRANSFER),
    getFavorites,
  );
  yield takeLatest(
    actionCreator('req', types.GET_HISTORY_TRANSFER),
    getHistory,
  );
}
