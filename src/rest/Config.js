export default class Config {
  static timeOutLow = 30000;
  static timeOutMiddle = 40000;
  static timeOutHigh = 50000;
  static BASE_URL = 'https://mebfetestapi.banqueatlantique.net:9443/';
  static AS = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    RESET_PASSWORD: 'resetpassword/step1',
  };
  static Accounts = {
    ACCOUNTS: 'accounts',
  };
  static Transactions = {
    TRANSACTIONS: 'accounts/transactions/{accountId}',
  };
  static Beneficiaries = {
    ALL: 'beneficiaries',
    TRANSFER: 'beneficiaries/virement',
    CASH_TRANSFER: 'beneficiaries/transfertcash',
  };
  static Transfer = {
    STEP1: 'virement/step1',
    STEP2: 'virement/step2',
    RESEND: 'virement/step1Resend',
    FAVORITES: 'virement/favoris',
    HISTORY: 'transfers',
  };
  static CashTransfer = {
    STEP1: 'madgab/step1',
    STEP2: 'madgab/step2',
    RESEND: 'madgab/step1Resend',
    FAVORITES: 'transfertcash/favoris',
    HISTORY: 'atmtransfers',
  };
  static Client = {
    SIGNALETIC: 'client/signalitic',
  };
  static CashTransfer = {
    STEP1: 'madgab/step1',
    STEP2: 'madgab/step2',
    RESEND: 'madgab/step1Resend',
    FAVORITES: 'transfertcash/favoris',
    HISTORY: 'atmtransfers',
  };
}
