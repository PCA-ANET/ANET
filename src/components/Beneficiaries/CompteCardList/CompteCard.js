import React from 'react';
import BenefItem from './CompteCardItem';

class BeneficiaireCard extends React.Component {
  state = {
    selectedAccount: this.props.selected,
  };
  render() {
    let Items = this.props.listCompte;

    let element = Items.map(Compte => {
      const {
        clientAccountId,
        accountName,
        accountNumber,
        availableBalance,
        bookBalance,
      } = Compte;
      console.log('selected account ', this.state.selectedAccount);
      console.log('clientaccount id ', clientAccountId);
      return (
        <BenefItem
          onclick={e => {
            this.props.account(clientAccountId);
            this.setState({ selectedAccount: clientAccountId });
            console.log('clicked');
          }}
          active={this.state.selectedAccount === clientAccountId}
          key={clientAccountId}
          accountName={accountName}
          accountNum={accountNumber}
          accountSolde={availableBalance}
          accountPrev={bookBalance}
        />
      );
    });

    return (
      <div className="col-sm-12 col-md-12 col-lg-6 text-center sm-mb-30">
        <div className="comptes-debit active">
          <h3 className="sm-pb-20">{this.props.BenefCardTitle}</h3>
          <div className="accounttpl-list">
            <div className="accounttpl-list_content">
              <ul className="accounttpl-list">{element}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default BeneficiaireCard;
