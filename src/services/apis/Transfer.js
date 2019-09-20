import AxiosAPI from '../../rest/AxiosAPI';
import Config from '../../rest/Config';

export default class Transfer {
  _handleOnSuccess(response, resolver) {
    return resolver({ data: response.data, status: response.status });
  }

  _handleOnError(error, reject) {
    return reject({ error });
  }

  init = initRequest =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transfer.STEP1)
        .setData(initRequest)
        .sendPost()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  validate = validationRequest =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transfer.STEP2)
        .setData(validationRequest)
        .sendPost()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  resendOtp = resendOtpRequest =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transfer.RESEND)
        .setData(resendOtpRequest)
        .sendPost()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  getFavorites = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transfer.FAVORITES)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  getHistory = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.Transfer.HISTORY)
        .setContentType('application/x-www-form-urlencoded')
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
}
