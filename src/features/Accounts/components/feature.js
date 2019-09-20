import React from 'react';
import Modal from './AccountsModal';
import SelectedAccount from '../../../components/ShowAccount/ShowAccount';
import HeadNav from '../../../components/PageHeadNav/PageHeadNav';
import { Link } from 'react-router-dom';
import { t } from '../../../i18n';
import Operations from './Operations';
import Signaletic from './Signaletic';
import RIB from './RIB';

class Feature extends React.PureComponent {
  _renderAccountName = () => {
    if (this.props.selectedAccount !== undefined) {
      let accountToString = [
        t('Accounts:account'),
        this.props.selectedAccount.accountName,
        'N° :',
        this.props.selectedAccount.accountNumber,
      ].join(' ');
      return accountToString;
    }
    return null;
  };

  _activateTab = tab => {
    this.props.activateTab(tab);
  };

  _renderActiveTab = () => {
    switch (this.props.activeTab) {
      case 'operations':
        return <Operations />;
      case 'details':
        return <Signaletic />;
      case 'rib':
        return <RIB />;
      default:
        return <Operations />;
    }
  };

  render() {
    let tabs = ['operations', 'details', 'rib'];
    return (
      <div className="page-content">
        <div className="page-content_side">
          <SelectedAccount
            account={this.props.selectedAccount}
            onclick={() => this.props.toggleModal()}
          >
            <li>
              <Link to="#">{t('Accounts:home')}</Link>
            </li>
            <li>
              <Link to="#">{t('Accounts:accounts')}</Link>
            </li>
            <li className="active">{this._renderAccountName()}</li>
          </SelectedAccount>
        </div>
        <HeadNav>
          {tabs.map(tab => (
            <li>
              <Link
                className={tab === this.props.activeTab && 'active'}
                title={tab}
                to="#"
                onClick={() => this._activateTab(tab)}
              >
                {t(`Accounts:${tab}`)}
              </Link>
            </li>
          ))}
        </HeadNav>
        {this._renderActiveTab()}
        <Modal accounts={this.props.accounts} />
      </div>
    );
  }
}

export default Feature;
