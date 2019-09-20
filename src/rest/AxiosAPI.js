import axios from 'axios';
import Config from './Config';
import i18next from 'i18next';
import _ from 'lodash';

export default class AxiosAPI {
  headerAuthorization = false;
  timeout = null;
  url = null;
  data = null;
  queryParams = null;
  pathVariables = null;
  header = {};
  axiosConfig = {};
  defaultLang = i18next.language;
  contentType = 'application/json';
  canal = 'mobile';

  constructor(headerAuthorization = true, timeOut = '1') {
    this.headerAuthorization = headerAuthorization;
    switch (timeOut) {
      case '1':
        this.timeout = Config.timeOutLow;
        break;
      case '2':
        this.timeout = Config.timeOutMiddle;
        break;
      case '3':
        this.timeout = Config.timeOutHigh;
        break;
      default:
        this.timeout = Config.timeOutLow;
    }
  }

  _buildQueryParams = () => {
    this.url = this.url.concat('&');
    this.queryParams.forEach(el => {
      this.url = this.url
        .concat(el.key)
        .concat('=')
        .concat(el.value)
        .concat('&');
    });
    this.url = this.url.slice(0, this.url.length - 1);
  };

  _buildPathVariables = () => {
    this.pathVariables.forEach(pv => {
      this.url = _.replace(this.url, `{${pv.key}}`, pv.value);
    });
  };

  _buildFullPath = () => {
    if (this.pathVariables != null) {
      this._buildPathVariables();
    }
    this.url = this.url.concat('?');
    this.url = this.url.concat('lang=').concat(this.defaultLang);
    if (this.queryParams) {
      this._buildQueryParams();
    }
    return this;
  };

  _buildHeader = () => {
    this.header['content-type'] = this.contentType;
    this.header['canal'] = this.canal;
    if (this.headerAuthorization)
      this.header['x-auth-token'] = sessionStorage.getItem('token');
    return this;
  };

  _buildConfig = () => {
    this.axiosConfig.timeout = this.timeout;
    this.axiosConfig.headers = this.header;
  };

  _handleLowLevelSuccess(response, resolver) {
    return resolver(response);
  }

  _handleLowLevelError(error, reject) {
    return reject(error);
  }

  setUrl = endPointPath => {
    this.url = Config.BASE_URL.concat(endPointPath);
    return this;
  };

  setHeaderParams = params => {
    params.forEach(param => (this.header[param.key] = param.value));
    return this;
  };

  setData = data => {
    this.data = data;
    return this;
  };

  setQueryParams = params => {
    this.queryParams = params;
    return this;
  };

  setPathVariables = params => {
    this.pathVariables = params;
    return this;
  };

  setContentType = contentType => {
    this.contentType = contentType;
    return this;
  };

  sendPost = () => {
    this._buildFullPath()
      ._buildHeader()
      ._buildConfig();
    return new Promise((resolver, reject) => {
      axios
        .post(this.url, this.data, this.axiosConfig)
        .then(response => this._handleLowLevelSuccess(response, resolver))
        .catch(error => this._handleLowLevelError(error, reject));
    });
  };

  sendGet = () => {
    this._buildFullPath()
      ._buildHeader()
      ._buildConfig();
    return new Promise((resolver, reject) => {
      axios
        .get(this.url, this.axiosConfig)
        .then(response => this._handleLowLevelSuccess(response, resolver))
        .catch(error => this._handleLowLevelError(error, reject));
    });
  };

  sendDelete = () => {
    this._buildFullPath()
      ._buildHeader()
      ._buildConfig();
    return new Promise((resolver, reject) => {
      axios
        .delete(this.url, { ...this.axiosConfig, data: this.data })
        .then(response => this._handleLowLevelSuccess(response, resolver))
        .catch(error => this._handleLowLevelError(error, reject));
    });
  };

  sendPut = () => {
    this._buildFullPath()
      ._buildHeader()
      ._buildConfig();
    return new Promise((resolver, reject) => {
      axios
        .put(this.url, this.data, this.axiosConfig)
        .then(response => this._handleLowLevelSuccess(response, resolver))
        .catch(error => this._handleLowLevelError(error, reject));
    });
  };
}
