import { actionCreator } from '../../utils/generators';
import AccountsActionTypes from './accounts.types';

const defaultState = {
  isLoading: false,
  error: null,
  accounts: [],
  signaletic: { NomPrenom: '', PieceId: '', Tel: '', Agec: '' },
  selectedAccountId: '',
  modalShow: false,
  activeTab: 'operations',
};

const accountsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionCreator('req', AccountsActionTypes.GET_ACCOUNTS):
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionCreator('res', AccountsActionTypes.GET_ACCOUNTS):
      return {
        ...state,
        error: null,
        isLoading: false,
        accounts: action.payload.data,
        selectedAccountId: action.payload.data[0].clientAccountId,
      };
    case actionCreator('fail', AccountsActionTypes.GET_ACCOUNTS):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };
    case actionCreator('req', AccountsActionTypes.SELECT_ACCOUNT):
      return {
        ...state,
        selectedAccountId: parseInt(action.payload),
      };

    case actionCreator('req', AccountsActionTypes.GET_SIGNALETIC):
      return {
        ...state,
        error: null,
        loading: true,
      };

    case actionCreator('res', AccountsActionTypes.GET_SIGNALETIC):
      if (action.payload.data.Data !== null) {
        return {
          ...state,
          signaletic: action.payload.data.Data,
          error: null,
          isLoading: false,
        };
      }
      return {
        ...state,
        error: null,
        isLoading: false,
      };

    case actionCreator('fail', AccountsActionTypes.GET_SIGNALETIC):
      return {
        ...state,
        error: 'error found',
        isLoading: false,
      };

    case actionCreator('req', AccountsActionTypes.TOGGLE_MODAL):
      return {
        ...state,
        modalShow: !state.modalShow,
      };
    case actionCreator('req', AccountsActionTypes.ACTIVATE_TAB):
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};
export default accountsReducer;
