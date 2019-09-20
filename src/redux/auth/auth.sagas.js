import { put, takeLatest, call } from 'redux-saga/effects';
import AS from '../../services/apis/as';
import AuthActionTypes from './auth.types';
import { actionCreator } from '../../utils/generators';
import history from '../../utils/history';

function* authFeature(authAction) {
  try {
    const loggedUser = yield call(new AS().login, authAction.payload);
    sessionStorage.setItem('token', loggedUser.data.token);
    yield put({
      type: actionCreator('res', AuthActionTypes.AUTH_ACTION),
    });
    history.push('/dashboard');
  } catch (error) {
    yield put({ type: actionCreator('fail', AuthActionTypes.AUTH_ACTION) });
  }
}

function* logout() {
  try {
    yield call(new AS().logout);
    yield put({ type: actionCreator('res', AuthActionTypes.LOGOUT_ACTION) });
  } catch (error) {
    yield put({ type: actionCreator('fail', AuthActionTypes.LOGOUT_ACTION) });
  } finally {
    sessionStorage.removeItem('token');
    history.push('/auth');
  }
}

function* resetPassword(resetPasswordAction) {
  try {
    yield call(new AS().resetPassword, resetPasswordAction.payload);
    yield put({ type: actionCreator('res', AuthActionTypes.RESET_PASSWORD) });
  } catch (error) {
    yield put({ type: actionCreator('fail', AuthActionTypes.RESET_PASSWORD) });
  }
}

export function* authSagas() {
  yield takeLatest(
    actionCreator('req', AuthActionTypes.AUTH_ACTION),
    authFeature,
  );
  yield takeLatest(actionCreator('req', AuthActionTypes.LOGOUT_ACTION), logout);
  yield takeLatest(
    actionCreator('req', AuthActionTypes.RESET_PASSWORD),
    resetPassword,
  );
}
