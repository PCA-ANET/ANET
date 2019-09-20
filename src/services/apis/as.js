import AxiosAPI from '../../rest/AxiosAPI';
import Config from '../../rest/Config';

export default class AS {
  _handleOnSuccess(response, resolver) {
    return resolver({ data: response.data, status: response.status });
  }

  _handleOnError(error, reject) {
    return reject({ error });
  }

  login = loginRequest =>
    new Promise((resolver, reject) =>
      new AxiosAPI(false)
        .setUrl(Config.AS.LOGIN)
        .setData(loginRequest)
        .sendPost()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  logout = () =>
    new Promise((resolver, reject) =>
      new AxiosAPI(true)
        .setUrl(Config.AS.LOGOUT)
        .sendGet()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );

  resetPassword = resetPasswordRequest =>
    new Promise((resolver, reject) =>
      new AxiosAPI(false)
        .setUrl(Config.AS.RESET_PASSWORD)
        .setData(resetPasswordRequest)
        .sendPost()
        .then(response => this._handleOnSuccess(response, resolver))
        .catch(error => this._handleOnError(error, reject)),
    );
}
