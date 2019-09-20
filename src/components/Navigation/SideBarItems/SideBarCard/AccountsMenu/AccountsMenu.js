import React, { Component } from 'react';
import { t } from '../../../../../i18n';
import CardItems from '../CardItems/CardItems';
import ItemSub from '../../SubElements/ItemSub';
import CardElements from '../CardElements/CardElements';
import {
  getAccounts,
  selectAccount,
  activateTab,
} from '../../../../../redux/accounts/accounts.actions';
import { connect } from 'react-redux';

class AccountsMenu extends Component {
  state = { activeSubMenu: null };

  _handleSelectedAccount = (accountId, activeTab) => {
    this.props.selectAccount(accountId);
    this.props.activateTab(activeTab);
  };

  componentDidMount() {
    this.props.getAccounts();
  }

  render() {
    let subMenuClass = 'submenu-accordion_title';
    return (
      <CardElements subtitle={t('Components:accounts')}>
        {this.props.accounts.length > 0
          ? this.props.accounts.map(account => (
            <CardItems
              key={account.clientAccountId}
              subtitle={`Compte n° ${account.accountNumber}`}
              class={
                this.state.activeSubMenu === account.clientAccountId
                  ? `${subMenuClass} open`
                  : subMenuClass
              }
              onClick={() =>
                this.setState({ activeSubMenu: account.clientAccountId })
              }
            >
              <ItemSub
                text={t('Components:operations')}
                link="/accounts"
                onClick={() =>
                  this._handleSelectedAccount(
                    account.clientAccountId,
                    'operations',
                  )
                }
              />
              <ItemSub
                text={t('Components:signaletiqFile')}
                link="/accounts"
                onClick={() =>
                  this._handleSelectedAccount(
                    account.clientAccountId,
                    'details',
                  )
                }
              />
              <ItemSub
                text={t('Components:rib')}
                link="/accounts"
                onClick={() =>
                  this._handleSelectedAccount(account.clientAccountId, 'rib')
                }
              />
            </CardItems>
          ))
          : null}
      </CardElements>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAccounts: () => {
    dispatch(getAccounts());
  },
  selectAccount: selectedAccount => {
    dispatch(selectAccount(selectedAccount));
  },
  activateTab: activeTab => {
    dispatch(activateTab(activeTab));
  },
});

const mapStateToProps = state => ({
  accounts: state.Accounts.accounts,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountsMenu);
