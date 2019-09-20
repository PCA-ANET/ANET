import React from 'react';
import { connect } from 'react-redux';
import { t } from '../../../i18n';
import Panel from '../../../components/Panel/Panel';
import Modal from '../../../components/Ui/Modal/Modal';
import AddFavoriteForm from '../../../components/AjoutFavoris/AjoutFavoris';
import { FAVORITES_NAMESPACE } from '../constants';
import DataTable from '../../../components/DataTable/DataTable';
import { getFavoritesCashTransfer } from '../../../redux/cashTransfer/cashTransfer.actions';
import { getFavoritesTransfer } from '../../../redux/transfer/transfer.actions';

const AccountColumn = props => (
  <div>
    <span className="text-strong">
      {props.clientAccount.accountName}
      <span className="text-light">n° {props.clientAccount.accountNumber}</span>
    </span>
  </div>
);
const BeneficiaryColumn = props => (
  <span className="text-strong">
    {props.beneficiary.name}
    <br />
    <span className="text-light">ID : {props.beneficiary.accountNumber}</span>
  </span>
);

const FavoriteTypeColumn = props => (
  <span className="text-strong">{props.searchValue}</span>
);

const ActionsButtonsColumn = props => (
  <div>
    <button
      className="btn btn-secondary sm-mr-10 btn-sm"
      onClick={props.editBtnHandler}
    >
      <span className="actions_btn md-trigger popin_btn">
        {t(`${FAVORITES_NAMESPACE}editBtn`)}
      </span>
    </button>
    <button
      className="btn btn-clear text-alert btn-sm"
      onclick={props.transactionBtnHandler}
    >
      <span className="design-button md-trigger popin_btn">
        {props.transactionBtnLabel}
      </span>
    </button>
  </div>
);
class Favorites extends React.Component {
  state = {
    showModal: false,
  };
  componentDidMount() {
    this.props.getCashTransferFavorites();
    this.props.getTransferFavorites();
  }
  _toggleAddFavoriteModel = () => {
    this.setState(currentState => ({
      showModal: !currentState.showModal,
    }));
  };

  _buildDataTableRows = () => {
    let cashTransferRows = this.props.cashTransferFavorites.map(data => {
      const { clientAccount, beneficiary, label, amount, description } = data;
      return {
        clientRow: (
          <AccountColumn
            clientAccount={clientAccount}
            searchValue={`${clientAccount.accountNumber} ${clientAccount.accountName}`}
          />
        ),
        beneficiaryRow: (
          <BeneficiaryColumn
            beneficiary={beneficiary}
            searchValue={`${beneficiary.name} ${beneficiary.accountNumber}`}
          />
        ),
        typeRow: (
          <FavoriteTypeColumn
            searchValue={t(`${FAVORITES_NAMESPACE}cashTransferTypeCln`)}
          />
        ),
        labelRow: label,
        amountRow: amount,
        descriptionRow: description,
        actionRow: (
          <ActionsButtonsColumn
            transactionBtnLabel={t(`${FAVORITES_NAMESPACE}cashTransferBtn`)}
            editBtnHandler={this.onEditClickHandler}
            transactionBtnHandler={this.onVirementClickHandler}
          />
        ),
      };
    });
    let transferRows = this.props.transferFavorites.map(data => {
      const { clientAccount, beneficiary, label, amount, description } = data;
      return {
        clientRow: (
          <AccountColumn
            clientAccount={clientAccount}
            searchValue={`${clientAccount.accountNumber} ${clientAccount.accountName}`}
          />
        ),
        beneficiaryRow: (
          <BeneficiaryColumn
            beneficiary={beneficiary}
            searchValue={`${beneficiary.name} ${beneficiary.accountNumber}`}
          />
        ),
        typeRow: (
          <FavoriteTypeColumn
            searchValue={t(`${FAVORITES_NAMESPACE}transferTypeCln`)}
          />
        ),
        labelRow: label,
        amountRow: amount,
        descriptionRow: description,
        actionRow: (
          <ActionsButtonsColumn
            transactionBtnLabel={t(`${FAVORITES_NAMESPACE}transferBtn`)}
            editBtnHandler={this.onEditClickHandler}
            transactionBtnHandler={this.onVirementClickHandler}
          />
        ),
      };
    });
    return cashTransferRows.concat(transferRows);
  };

  render() {
    let tableData = {
      columns: [
        {
          label: t(`${FAVORITES_NAMESPACE}accountClnLabel`),
          field: 'clientRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${FAVORITES_NAMESPACE}beneficiaryClnLabel`),
          field: 'beneficiaryRow',
          sort: 'asc',
          width: 120000,
          searchable: true,
        },
        {
          label: t(`${FAVORITES_NAMESPACE}typeClnLabel`),
          field: 'typeRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },

        {
          label: t(`${FAVORITES_NAMESPACE}labelClnLabel`),
          field: 'labelRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${FAVORITES_NAMESPACE}amountClnLabel`),
          field: 'amountRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${FAVORITES_NAMESPACE}descriptionClnLabel`),
          field: 'descriptionRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${FAVORITES_NAMESPACE}actionClnLabel`),
          field: 'actionRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
      ],
      rows: this._buildDataTableRows(),
    };
    return (
      <div className="row mx-auto">
        <div className="col-sm-12">
          <Panel
            title={t(`${FAVORITES_NAMESPACE}panelTitle`)}
            button={true}
            btntxt={t(`${FAVORITES_NAMESPACE}addFavoriteBtn`)}
            onclick={this._toggleAddFavoriteModel}
          >
            <DataTable
              data={tableData}
              sortRows={['clientRow', 'beneficiaryRow', 'typeRow']}
            />
          </Panel>
        </div>
        <Modal
          text={t(`${FAVORITES_NAMESPACE}addFavoriteModelTitle`)}
          show={this.state.showModal}
          modalClosed={this._toggleAddFavoriteModel}
        >
          <AddFavoriteForm />
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCashTransferFavorites: () => {
    dispatch(getFavoritesCashTransfer());
  },
  getTransferFavorites: () => {
    dispatch(getFavoritesTransfer());
  },
});

const mapStateToProps = state => ({
  cashTransferFavorites: state.CashTransfer.favorites,
  transferFavorites: state.Transfer.favorites,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favorites);
