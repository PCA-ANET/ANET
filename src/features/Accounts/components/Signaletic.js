import React from 'react';
import { getSignaletic } from '../../../redux/accounts/accounts.actions';
import { connect } from 'react-redux';
import { t } from '../../../i18n';
import { Link } from 'react-router-dom';

class Signaletic extends React.PureComponent {
  componentDidMount() {
    this.props.getSignaletic();
  }

  render() {
    let { NomPrenom, PieceId, Tel, Agec } = this.props.signaletic;
    return (
      <div className="page-container_inner">
        <div className="main-content container-fluid">
          <div className="row mx-auto">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-heading panel-heading-divider">
                  <div className="row">
                    <div className="col-md-6">
                      {t('Accounts:signaleticForm')}
                    </div>
                    <div className="col-md-6">
                      <div className="download_links dropdown_area float_right">
                        <span className="purple_download">
                          {t('Accounts:download')} :&nbsp;
                          <Link to="#">PDF</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="detail-compte">
                    <div className="row">
                      <div className="col-md-6 col-left">
                        <ul>
                          <li>
                            <span className="title">
                              {t('Accounts:fullName')}
                            </span>
                            <span className="text">{NomPrenom}</span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:idType')}
                            </span>
                            <span className="text">{t('Accounts:CIN')}</span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:idNumber')}
                            </span>
                            <span className="text">{PieceId}</span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:resident')}
                            </span>
                            <span className="text"></span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:agency')}
                            </span>
                            <span className="text">{Agec}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 col-right">
                        <ul>
                          <li>
                            <span className="title">
                              {t('Accounts:address')}
                            </span>
                            <span className="text"></span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:postalCode')}
                            </span>
                            <span className="text"></span>
                          </li>
                          <li>
                            <span className="title">{t('Accounts:city')}</span>
                            <span className="text"></span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:country')}
                            </span>
                            <span className="text"></span>
                          </li>
                          <li>
                            <span className="title">
                              {t('Accounts:phoneNumber')}
                            </span>
                            <span className="text">{Tel[0]}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getSignaletic: () => {
    dispatch(getSignaletic());
  },
});

const mapStateToProps = state => ({
  signaletic: state.Accounts.signaletic,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signaletic);
