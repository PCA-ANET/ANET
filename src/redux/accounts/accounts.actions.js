import { actionCreator } from '../../utils/generators';
import AccountsActionTypes from './accounts.types';

export const getAccounts = () => ({
  type: actionCreator('req', AccountsActionTypes.GET_ACCOUNTS),
});

export const selectAccount = selectedAccount => ({
  type: actionCreator('req', AccountsActionTypes.SELECT_ACCOUNT),
  payload: selectedAccount,
});

export const getSignaletic = () => ({
  type: actionCreator('req', AccountsActionTypes.GET_SIGNALETIC),
});

export const toggleModal = () => ({
  type: actionCreator('req', AccountsActionTypes.TOGGLE_MODAL),
});

export const activateTab = activeTab => ({
  type: actionCreator('req', AccountsActionTypes.ACTIVATE_TAB),
  payload: activeTab,
});
