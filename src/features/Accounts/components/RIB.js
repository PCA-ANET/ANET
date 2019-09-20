import React from 'react';
import { connect } from 'react-redux';
import { t } from '../../../i18n';
import { Link } from 'react-router-dom';
import { getSelectedAccountRIB } from '../../../redux/accounts/accounts.selectors';
import { getSignaletic } from '../../../redux/accounts/accounts.actions';

class RIB extends React.PureComponent {
  componentDidMount() {
    this.props.getSignaletic();
  }

  render() {
    let { bankCode, agencyCode, accountNumber, ribKey } = this.props.rib;
    return (
      <div className="page-container_inner">
        <div className="main-content container-fluid">
          <div className="row mx-auto">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-heading panel-heading-divider">
                  <div className="row">
                    <div className="col-md-6">{t('Accounts:rib')}</div>
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
                <div className="panel-body rib_page">
                  <div className="rib_content">
                    <div className="releve_bancaire">
                      <h3>{t('Accounts:ribTitle')}</h3>
                    </div>
                    <div className="rib_top">
                      <div className="left_rib_top">
                        <table>
                          <thead>
                            <tr>
                              <th width="23%">{t('Accounts:bankCode')}</th>
                              <th width="15%">{t('Accounts:agencyCode')}</th>
                              <th>{t('Accounts:accountNumber')}</th>
                              <th width="12%" align="center">
                                {t('Accounts:ribKey')}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{bankCode}</td>
                              <td>{agencyCode}</td>
                              <td>{accountNumber}</td>
                              <td>{ribKey}</td>
                            </tr>
                            <tr>
                              <td colSpan="4">&nbsp;</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="2">{t('Accounts:swiftCode')}</td>
                              <td colSpan="2">Y</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="right_rib_top">
                        <h3>{t('Accounts:agency')} X</h3>
                      </div>
                    </div>
                    <div className="rib_bot">
                      <div className="left_rib_bot">
                        <h3>{t('Accounts:domiciliation')}</h3>
                        <p>Y</p>
                      </div>
                      <div className="right_rib_bot">
                        <h3>{t('Accounts:accountOwner')}</h3>
                        <p>{this.props.fullName}</p>
                      </div>
                    </div>
                    <div className="rib_remarque">
                      <p>{t('Accounts:ribRemark')}</p>
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
  rib: getSelectedAccountRIB(state),
  fullName: state.Accounts.signaletic.NomPrenom,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RIB);
