import types from './transfer.types';
import { actionCreator } from '../../utils/generators';

const defaultState = {
  isLoading: false,
  isConnected: true,
  error: null,
  favorites: [],
  history: [],
};

const TransferReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', types.INIT_TRANSFER):
      return { ...state, isLoading: true };
    case actionCreator('res', types.INIT_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: true,
      };
    case actionCreator('fail', types.INIT_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.VALIDATE_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', types.VALIDATE_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('fail', types.VALIDATE_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('req', types.RESEND_OTP_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', types.RESEND_OTP_TRANSFER):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('fail', types.RESEND_OTP_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('req', types.GET_FAVORITES_TRANSFER):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_FAVORITES_TRANSFER):
      return {
        ...state,
        favorites: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', types.GET_FAVORITES_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.GET_HISTORY_TRANSFER):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_HISTORY_TRANSFER):
      return {
        ...state,
        history: action.payload.data,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', types.GET_HISTORY_TRANSFER):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default TransferReducer;
