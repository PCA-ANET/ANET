import React from 'react';
import { t } from '../../i18n';
import Amount from '../Amount/Amount';

const showAccount = props => {
  let account = { accountName: '', accountNumber: '', bookBalance: '' };
  if (props.account !== undefined) {
    account = props.account;
  }
  return (
    <div className="page-head">
      <div className="page-head-compte">
        <div className="left-col">
          <div className="left__top">
            <h2 className="page-head-title">
              {account.accountName}
              <span>(n° {account.accountNumber})</span>
            </h2>
            <button
              className="btn btn-space btn-primary md-trigger popin_btn"
              type="button"
              data-modal="colored-primary"
              onClick={props.onclick}
            />
          </div>
          <ol className="breadcrumb page-head-nav">{props.children}</ol>
        </div>
        <div className="right-col solde-info">
          <div className="solde-top">
            <span className="lbl">{t('Components:availableBalance')}</span>
            <span className="price">
              <Amount
                amount={account.availableBalance}
                currency={t('Components:currency')}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default showAccount;
