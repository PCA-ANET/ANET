import { actionCreator } from '../../utils/generators';
import types from './cashTransfer.types';

export const initCashTransfer = initRequest => ({
  type: actionCreator('req', types.INIT_CASH_TRANSFER),
  payload: initRequest,
});

export const validateCashTransfer = validationRequest => ({
  type: actionCreator('req', types.VALIDATE_CASH_TRANSFER),
  payload: validationRequest,
});

export const resendOtpCashTransfer = resendOtpRequest => ({
  type: actionCreator('req', types.RESEND_OTP_CASH_TRANSFER),
  payload: resendOtpRequest,
});

export const getFavoritesCashTransfer = () => ({
  type: actionCreator('req', types.GET_FAVORITES_CASH_TRANSFER),
});

export const getHistoryCashTransfer = () => ({
  type: actionCreator('req', types.GET_HISTORY_CASH_TRANSFER),
});
