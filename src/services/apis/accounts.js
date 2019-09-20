import AxiosAPI from '../../rest/AxiosAPI';
import Config from '../../rest/Config';

export default class Accounts {
  _handleOnSuccess(response, resolver) {
    return resolver({ data: response.data, status: response.status });
  }

  _handleOnError(error, reject) {
    return reject({ error });
  }

  getAccounts = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Accounts.ACCOUNTS)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  getOperations = accountId =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transactions.TRANSACTIONS)
        .setPathVariables([{ key: 'accountId', value: accountId }])
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  getSignaletic = accountNumber =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Client.SIGNALETIC)
        .setQueryParams([{ key: 'accountNumber', value: accountNumber }])
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
}
