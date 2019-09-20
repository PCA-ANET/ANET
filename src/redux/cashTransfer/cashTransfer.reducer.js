import types from './cashTransfer.types';
import { actionCreator } from '../../utils/generators';

const defaultState = {
  isLoading: false,
  isConnected: false,
  error: null,
  favorites: [],
  history: [],
};

const cashTransferReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', types.INIT_CASH_TRANSFER):
      return { ...state, isLoading: true };
    case actionCreator('res', types.INIT_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: true,
      };
    case actionCreator('fail', types.INIT_CASH_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.VALIDATE_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', types.VALIDATE_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('fail', types.VALIDATE_CASH_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('req', types.RESEND_OTP_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', types.RESEND_OTP_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('fail', types.RESEND_OTP_CASH_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('req', types.GET_FAVORITES_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_FAVORITES_CASH_TRANSFER):
      return {
        ...state,
        favorites: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', types.GET_FAVORITES_CASH_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.GET_HISTORY_CASH_TRANSFER):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_HISTORY_CASH_TRANSFER):
      return {
        ...state,
        history: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', types.GET_HISTORY_CASH_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default cashTransferReducer;
