import { createSelector } from 'reselect';

const getAccounts = state => state.Accounts.accounts;
export const getSelectedAccountId = state => state.Accounts.selectedAccountId;

export const getSelectedAccount = createSelector(
  [getAccounts, getSelectedAccountId],
  (accounts, selectedAccountId) =>
    accounts.filter(
      account => account.clientAccountId === selectedAccountId,
    )[0],
);

export const getSelectedAccountNumber = createSelector(
  [getSelectedAccount],
  selectedAccount => {
    if (selectedAccount) return selectedAccount.accountNumber;
  },
);


export const getSelectedAccountRIB = createSelector(
  [getSelectedAccount],
  selectedAccount => {
    if (selectedAccount !== undefined)
      return {
        bankCode: selectedAccount.iBAN.substring(0, 5),
        agencyCode: selectedAccount.iBAN.substring(5, 10),
        accountNumber: selectedAccount.iBAN.substring(10, 22),
        ribKey: selectedAccount.iBAN.substring(22, 24),
      };
    else {
      return {
        bankCode: '',
        agencyCode: '',
        accountNumber: '',
        ribKey: '',
      };
    }
  },
);
