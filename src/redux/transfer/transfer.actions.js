import { actionCreator } from '../../utils/generators';
import types from './transfer.types';

export const initTransfer = initRequest => ({
  type: actionCreator('req', types.INIT_TRANSFER),
  payload: initRequest,
});

export const validateTransfer = validationRequest => ({
  type: actionCreator('req', types.VALIDATE_TRANSFER),
  payload: validationRequest,
});

export const resendOtpTransfer = resendOtpRequest => ({
  type: actionCreator('req', types.RESEND_OTP_TRANSFER),
  payload: resendOtpRequest,
});

export const getFavoritesTransfer = () => ({
  type: actionCreator('req', types.GET_FAVORITES_TRANSFER),
});

export const getHistoryTransfer = () => ({
  type: actionCreator('req', types.GET_HISTORY_TRANSFER),
});
