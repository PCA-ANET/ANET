import { put, takeLatest, call } from 'redux-saga/effects';
import { actionCreator } from '../../utils/generators';
import BeneficiariesActionTypes from './beneficiaries.types';
import Beneficiaries from '../../services/apis/beneficiaries';

function* getAllBeneficiaries() {
  try {
    const response = yield call(new Beneficiaries().getAll);
    yield put({
      type: actionCreator(
        'res',
        BeneficiariesActionTypes.GET_ALL_BENEFICIARIES,
      ),
      payload: response,
    });
  } catch (error) {
    yield put({
      type: actionCreator(
        'fail',
        BeneficiariesActionTypes.GET_ALL_BENEFICIARIES,
      ),
    });
  }
}
function* getTransferBeneficiaries() {
  try {
    const response = yield call(new Beneficiaries().getTransferBeneficiaries);
    yield put({
      type: actionCreator(
        'res',
        BeneficiariesActionTypes.GET_TRANSFER_BENEFICIARIES,
      ),
      payload: response,
    });
  } catch (error) {
    yield put({
      type: actionCreator(
        'fail',
        BeneficiariesActionTypes.GET_TRANSFER_BENEFICIARIES,
      ),
    });
  }
}
function* getCashTransferBeneficiaries() {
  try {
    const response = yield call(
      new Beneficiaries().getCashTransferBeneficiaries,
    );
    yield put({
      type: actionCreator(
        'res',
        BeneficiariesActionTypes.GET_CASH_TRANSFER_BENEFICIARIES,
      ),
      payload: response,
    });
  } catch (error) {
    yield put({
      type: actionCreator(
        'fail',
        BeneficiariesActionTypes.GET_CASH_TRANSFER_BENEFICIARIES,
      ),
    });
  }
}

export function* beneficiariesSagas() {
  yield takeLatest(
    actionCreator('req', BeneficiariesActionTypes.GET_ALL_BENEFICIARIES),
    getAllBeneficiaries,
  );
  yield takeLatest(
    actionCreator('req', BeneficiariesActionTypes.GET_TRANSFER_BENEFICIARIES),
    getTransferBeneficiaries,
  );
  yield takeLatest(
    actionCreator(
      'req',
      BeneficiariesActionTypes.GET_CASH_TRANSFER_BENEFICIARIES,
    ),
    getCashTransferBeneficiaries,
  );
}
