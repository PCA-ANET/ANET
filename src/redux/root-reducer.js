import { combineReducers } from 'redux';
import accountsReducer from './accounts/accounts.reducer';
import operationsReducer from './operations/operations.reducer';
import authReducer from './auth/auth.reducer';
import beneficiariesReducer from './beneficiaries/beneficiaries.reducer';
import transferReducer from './transfer/transfer.reducer';
import cashTransferReducer from './cashTransfer/cashTransfer.reducer';

const rootReducer = combineReducers({
  Beneficiaries: beneficiariesReducer,
  Accounts: accountsReducer,
  Operations: operationsReducer,
  Auth: authReducer,
  Transfer: transferReducer,
  CashTransfer: cashTransferReducer,
});

export default rootReducer;
