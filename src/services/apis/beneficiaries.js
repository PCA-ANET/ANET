import AxiosAPI from '../../rest/AxiosAPI';
import Config from '../../rest/Config';

export default class Beneficiaries {
  _handleOnSuccess(response, resolver) {
    return resolver({ data: response.data, status: response.status });
  }

  _handleOnError(error, reject) {
    return reject({ error });
  }

  getAll = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Beneficiaries.ALL)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
  getTransferBeneficiaries = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Beneficiaries.TRANSFER)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
  getCashTransferBeneficiaries = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Beneficiaries.CASH_TRANSFER)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
}
