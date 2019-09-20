import AuthActionTypes from './auth.types';
import { actionCreator } from '../../utils/generators';

const defaultState = {
  isLoading: false,
  isConnected: false,
  error: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', AuthActionTypes.AUTH_ACTION):
      return { ...state, isLoading: true };
    case actionCreator('res', AuthActionTypes.AUTH_ACTION):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: true,
      };
    case actionCreator('fail', AuthActionTypes.AUTH_ACTION):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', AuthActionTypes.LOGOUT_ACTION):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', AuthActionTypes.LOGOUT_ACTION):
      return {
        ...state,
        error: null,
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('fail', AuthActionTypes.LOGOUT_ACTION):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
        isConnected: false,
      };
    case actionCreator('req', AuthActionTypes.RESET_PASSWORD):
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case actionCreator('res', AuthActionTypes.RESET_PASSWORD):
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case actionCreator('fail', AuthActionTypes.RESET_PASSWORD):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
