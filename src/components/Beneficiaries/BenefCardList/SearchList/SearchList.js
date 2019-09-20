import React, { Component } from 'react';
import SearchIcon from '../../../../assets/SvgComponents/SearchIcon/SearchIcon';
import { t } from '../../../../i18n';
import { StyledListItem } from './SearchList.style'
class SearchList extends Component {
  state = {
    filter: '',
    selectedBeneficiary: this.props.selected,
  };
  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    const { filter } = this.state;
    const { row } = this.props;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = row.filter(item => {
      let { name, mobileNumber, accountNumber } = item;
      let element = { name, mobileNumber, accountNumber };
      return Object.keys(element).some(key => {
        if (element[key] !== null) {
          return element[key].toLowerCase().includes(lowercasedFilter);
        }
        return element[key];
      });
    });

    return (
      <>
        <div className="recipient-content_search">
          <div className="field">
            <input
              className="form-control input-lg"
              type="text"
              value={filter}
              placeholder={t('Components:Rechercherunbénéficiaire')}
              onChange={this.handleChange}
            />
            <button>
              <span className="icon">
                <SearchIcon />
              </span>
            </button>
          </div>
        </div>

        <div className="transfer_accounts account_beneficaire_items recipient-content text-left">
          <div className="accounttpl-list">
            <div className="accounttpl-list_content">
              <ul className="accounttpl-list">
                {filteredData.map(item => (
                  <StyledListItem
                    key={item.beneficiaryId}
                    onClick={e => {
                      this.props.benef(item.beneficiaryId);
                      this.setState({ selectedBeneficiary: item.beneficiaryId })
                    }}
                    className={`row compte mx-auto`}
                    active={ this.state.selectedBeneficiary === item.beneficiaryId }
                  >
                    <div className="col text-left">
                      <strong className="ttr-account">{item.name}</strong>
                      <br />
                      <span className="libelle-account">
                        <i className="icon icon-man">{item.mobileNumber}</i>
                      </span>
                    </div>
                    <div className="col text-right">
                      <span className="account-montant">
                        {item.accountNumber}
                      </span>
                    </div>
                  </StyledListItem>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchList;
