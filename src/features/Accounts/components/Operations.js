import React from 'react';
import Panel from '../../../components/Panel/Panel';
import { t } from '../../../i18n';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';
import { getOperations } from '../../../redux/operations/operations.actions';
import FormatDate from '../../../components/FormatDateComponent/FormatDateComponent';
import Amount from '../../../components/Amount/Amount';

class Operations extends React.PureComponent {
  componentDidMount() {
    this.props.getOperations();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedAccountId !== this.props.selectedAccountId)
      this.props.getOperations();
  }

  render() {
    let rowdata = this.props.operations;
    let rows = rowdata.map(datas => {
      const { date, valueDate, description, code, amount, sign } = datas;
      const newRow = {
        rowdateraw: date,
        rowdate: <FormatDate date={date} sign={sign} value={false} />,
        rowvalueDate: valueDate,
        rowvalueDateraw: <FormatDate date={valueDate} value={true} />,
        rowdescription: description,
        rowcode: code,
        rowamount:
          sign === 'C' ? (
            <span style={{ color: 'green' }}>
              <Amount amount={parseInt(amount)} positive />
            </span>
          ) : (
            <span style={{ color: 'red' }}>
              <Amount amount={parseInt(amount)} negative />
            </span>
          ),
        rowmount: sign === 'C' ? parseInt(amount) : parseInt(amount) * -1,
      };
      return newRow;
    });

    let data = {
      columns: [
        {
          label: '',
          field: 'x',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t('Accounts:date'),
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
          label: t('Accounts:dateValue'),
          field: 'rowvalueDate',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t('Accounts:description'),
          field: 'rowdescription',
          sort: 'asc',
          width: 120000,
          searchable: true,
        },
        {
          label: t('Accounts:reference'),
          field: 'rowcode',
          sort: 'asc',
          width: '100px',
          searchable: true,
        },
        {
          label: t('Accounts:amount').concat(` (${t('Components:currency')})`),
          field: 'rowmount',
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
      ],
      rows: rows,
    };

    return (
      <div className="page-container_inner">
        <div className="main-content ">
          <div className="row mx-auto">
            <div className="col-sm-12">
              <Panel
                title={t('Accounts:operationsHistory')}
                operations={this.props.operations}
                selectedAccountNumber={this.props.selectedAccount}
                download
              >
                <MDBDataTable
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
                  className="table-history-operation"
                  data={data}
                />
              </Panel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getOperations: accountId => {
    dispatch(getOperations(accountId));
  },
});

const mapStateToProps = state => ({
  operations: state.Operations.operations,
  selectedAccountId: state.Accounts.selectedAccountId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Operations);
