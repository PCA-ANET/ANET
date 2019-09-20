import React from 'react';
import { connect } from 'react-redux';
import { t } from '../../../i18n';
import Panel from '../../../components/Panel/Panel';
import DataTable from '../../../components/DataTable/DataTable';
import { getHistoryCashTransfer } from '../../../redux/cashTransfer/cashTransfer.actions';
import { HISTORY_NAMESPACE } from '../constants';
import FormatDate from '../../../components/FormatDateComponenth/FormatDateComponent';

const AccountColumn = ({ account }) => (
  <div>
    <span className="text-strong">
      {account.accountName}
      <span className="text-light">n° {account.accountNumber}</span>
    </span>
  </div>
);
const BeneficiaryColumn = ({ beneficiary }) => (
  <span className="text-strong">
    {beneficiary.labelBeneficiary}
    <br />
    <span className="text-light">ID : {beneficiary.beneficiaryHistoricId}</span>
  </span>
);
class CashTransferHistory extends React.Component {
  componentDidMount() {
    this.props.getHistory();
  }
  _buildDataTableRows = () =>
    this.props.history.map(data => {
      const {
        addTime,
        clientAccount,
        beneficiaryHistoric,
        executionReference,
        amount,
      } = data;
      return {
        rowdateraw: addTime,
        dateRow: <FormatDate date={addTime} value={true} />,
        rowclientNum: clientAccount.accountNumber,
        rowclientName: clientAccount.accountName,
        accountRow: (
          <AccountColumn
            account={clientAccount}
            searchValue={`${clientAccount.accountNumber} ${clientAccount.accountName}`}
          />
        ),
        rowBenefraw: beneficiaryHistoric.labelBeneficiary,
        beneficiaryRow: (
          <BeneficiaryColumn
            beneficiary={beneficiaryHistoric}
            searchValue={beneficiaryHistoric.labelBeneficiary}
          />
        ),
        codeRow: executionReference,
        amountRow: amount,
      };
    });
  render() {
    let tableData = {
      columns: [
        {
          label: '',
          field: 'x',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${HISTORY_NAMESPACE}dateClnLabel`),
          field: 'rowdateraw',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: '',
          field: 'y',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: '',
          field: 'w',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },

        {
          label: t(`${HISTORY_NAMESPACE}accountClnLabel`),
          field: 'rowclientName',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: '',
          field: 'z',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${HISTORY_NAMESPACE}beneficiaryClnLabel`),
          field: 'rowBenefraw',
          sort: 'asc',
          width: 120000,
          searchable: true,
        },

        {
          label: t(`${HISTORY_NAMESPACE}referenceClnLabel`),
          field: 'codeRow',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t(`${HISTORY_NAMESPACE}amountClnLabel`),
          field: 'amountRow',
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
          <Panel title={t(`${HISTORY_NAMESPACE}cashTransferHistoryPanelTitle`)}>
            <DataTable
              paginationLabel={[t('Accounts:previous'), t('Accounts:next')]}
              searchLabel={t('Accounts:search')}
              infoLabel={[
                t('Accounts:showing'),
                t('Accounts:to'),
                t('Accounts:of'),
                t('Accounts:entries'),
              ]}
              responsive
              btn={true}
              fixed
              entriesOptions={[7, 10, 40]}
              hover
              className="table-history-transfert"
              data={tableData}
            />
          </Panel>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getHistory: () => {
    dispatch(getHistoryCashTransfer());
  },
});

const mapStateToProps = state => ({
  history: state.CashTransfer.history,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CashTransferHistory);
