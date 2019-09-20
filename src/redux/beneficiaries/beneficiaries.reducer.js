import { actionCreator } from '../../utils/generators';
import types from './beneficiaries.types';

const defaultState = {
  isLoading: false,
  error: null,
  allBeneficiaries: [],
  transferBeneficiaries: [],
  cashTransferBeneficiaries: [],
};

const beneficiariesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', types.GET_ALL_BENEFICIARIES):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_ALL_BENEFICIARIES):
      return {
        ...state,
        error: null,
        isLoading: false,
        allBeneficiaries: action.payload.data,
      };
    case actionCreator('fail', types.GET_ALL_BENEFICIARIES):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.GET_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: null,
        isLoading: false,
        transferBeneficiaries: action.payload.data,
      };
    case actionCreator('fail', types.GET_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', types.GET_CASH_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', types.GET_CASH_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: null,
        isLoading: false,
        cashTransferBeneficiaries: action.payload.data,
      };
    case actionCreator('fail', types.GET_CASH_TRANSFER_BENEFICIARIES):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    default:
      return state;
  }
};
export default beneficiariesReducer;
