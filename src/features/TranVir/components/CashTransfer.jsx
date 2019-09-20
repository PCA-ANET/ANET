import React from 'react';
import Stepper from '../../../components/Stepper/Stepper';
import Check from '@material-ui/icons/Check';
import Money from '@material-ui/icons/AttachMoney';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Montant from '../../../components/MontantForm/MontantForm';
import Recap from '../../../components/Recap/Recap';
import { t } from '../../../i18n';
import { connect } from 'react-redux';
import { getAccounts } from '../../../redux/accounts/accounts.actions';
import {
  initCashTransfer,
  validateCashTransfer,
  resendOtpCashTransfer,
} from '../../../redux/cashTransfer/cashTransfer.actions';
import Beneficiaries from '../../../components/Beneficiaries/Beneficiaries';
import { CASH_TRANSFER_NAMESPACE } from '../constants';
import { getCashTransferBeneficiaries } from '../../../redux/beneficiaries/beneficiaries.actions';

class CashTransfer extends React.Component {
  state = {
    label: '',
    amount: '',
    favoris: false,
    codeValue: '',
    pinValue: '',
    selectedAccountId: {},
    selectedBeneficiaryId: {},
    selectedAccount: {},
    selectedBeneficiary: {},
  };

  _accountChangeHandler = accountId => {
    this.setState({ selectedAccountId: accountId });
  };
  _BeneficiaryChangeHandler = beneficiaryId => {
    this.setState({ selectedBeneficiaryId: beneficiaryId });
  };
  _amountChangeHandler = amount => {
    this.setState({ amount: amount });
  };
  _labelChangeHandler = label => {
    this.setState({ label: label });
  };

  componentDidMount() {
    this.props.getAccounts();
    this.props.getCashTransferBeneficiaries();
  }

  favorisHandler = childData => {
    this.setState({ favoris: childData });
  };
  handleChange = event => {
    this.setState({ codeValue: event.target.value });
  };
  handlePinChange = event => {
    this.setState({ pinValue: event.target.value });
  };
  submit1Handler = () => {
    let selectedClientAccount = this.props.accounts.filter(
      account => account.clientAccountId === this.state.selectedAccountId,
    );

    let selectedBeneficiary = this.props.cashTransferBeneficiaries.filter(
      beneficiary =>
        beneficiary.beneficiaryId === this.state.selectedBeneficiaryId,
    );

    this.setState(
      {
        selectedAccount: selectedClientAccount[0],
        selectedBeneficiary: selectedBeneficiary[0],
      },
      () =>
        this.props.init(
          this.state.selectedAccount,
          this.state.selectedBeneficiary,
          this.state.label,
          this.state.amount,
          this.state.label,
          this.state.favoris,
        ),
    );
  };
  submit2Handler = () => {
    this.props.validate(
      localStorage.getItem('otpId'),
      this.state.codeValue,
      this.state.favoris,
      this.state.pinValue,
    );
  };

  submit3Handler = () => {
    this.props.resendOtp(localStorage.getItem('otpId'));
  };
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="wizard-row">
            <div className="panel panel-default panel-wizard">
              <Stepper
                elements={[
                  {
                    stepNumber: 0,
                    stepTitle: t(
                      `${CASH_TRANSFER_NAMESPACE}beneficiaryStepTitle`,
                    ),
                    stepIcon: <GroupAddIcon />,
                    stepRender: (
                      <Beneficiaries
                        selectedAccount={this.state.selectedAccountId}
                        selectedBeneficiary={this.state.selectedBeneficiaryId}
                        accountsList={this.props.accounts}
                        onAccountChange={this._accountChangeHandler}
                        showAlertEnabled={
                          this.props.cashTransferBeneficiaries.length === 0
                        }
                        onBeneficiaryChange={this._BeneficiaryChangeHandler}
                        beneficiariesList={this.props.cashTransferBeneficiaries}
                      />
                    ),
                  },
                  {
                    stepNumber: 1,
                    stepTitle: t(`${CASH_TRANSFER_NAMESPACE}amountStepTitle`),
                    stepIcon: <Money />,
                    stepRender: (
                      <Montant
                        amount={this._amountChangeHandler}
                        lib={this._labelChangeHandler}
                        favo={this.favorisHandler}
                      />
                    ),
                  },
                  {
                    stepNumber: 2,
                    stepTitle: t(`${CASH_TRANSFER_NAMESPACE}recapStepTitle`),
                    stepIcon: <VideoLabelIcon />,
                    stepRender: (
                      <Recap
                        name={this.state.selectedBeneficiary.name}
                        number={this.state.selectedBeneficiary.mobileNumber}
                        amount={this.state.amount}
                        code="    the codee  "
                        ownNumber="     the user Number    "
                        onclickbutton={this.submit3Handler}
                        onCodeChange={this.handleChange}
                        codeValue={this.state.codeValue}
                        pin={true}
                        onPinChange={this.handlePinChange}
                        pinValue={this.state.pinValue}
                      />
                    ),
                  },
                  {
                    stepNumber: 3,
                    stepTitle: t(
                      `${CASH_TRANSFER_NAMESPACE}confirmationStepTitle`,
                    ),
                    stepIcon: <Check />,
                    stepRender: t(`${CASH_TRANSFER_NAMESPACE}recapSentence`, {
                      account: this.state.selectedAccount.accountNumber,
                      beneficiary: this.state.selectedBeneficiary.name,
                      amount: this.state.amount,
                    }),
                  },
                ]}
                dis1={
                  this.state.selectedAccountId === '' ||
                  this.state.selectedBeneficiaryId === ''
                }
                dis2={this.state.amount === '' || this.state.label === ''}
                dis3={this.state.codeValue === ''}
                resetStats={() => {
                  this.setState({
                    selectedAccount: {},
                    selectedBeneficiary: {},
                    selectedAccountId: '',
                    selectedBeneficiaryId: '',
                    amount: '',
                    label: '',
                    codeValue: '',
                  });
                }}
                action2={this.submit1Handler}
                ValidateAction={this.submit2Handler}
                ModalBackComp={
                  <Beneficiaries
                    accountsList={this.props.accounts}
                    onAccountChange={this._accountChangeHandler}
                    onBeneficiaryChange={this._BeneficiaryChangeHandler}
                    beneficiariesList={this.props.cashTransferBeneficiaries}
                  />
                }
                success={this.props.error === null ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCashTransferBeneficiaries: () => {
    dispatch(getCashTransferBeneficiaries());
  },
  getAccounts: () => {
    dispatch(getAccounts());
  },
  init: (clientAccount, beneficiary, label, amount, description, favoris) => {
    dispatch(
      initCashTransfer({
        clientAccount,
        beneficiary,
        label,
        amount,
        description,
        favoris,
      }),
    );
  },
  validate: (otpId, otpValue, favoris, pin) => {
    dispatch(
      validateCashTransfer({
        otpId,
        otpValue,
        favoris,
        pin,
      }),
    );
  },
  resendOtp: otpId => {
    dispatch(
      resendOtpCashTransfer({
        otpId,
      }),
    );
  },
});

const mapStateToProps = state => ({
  cashTransferBeneficiaries: state.Beneficiaries.cashTransferBeneficiaries,
  accounts: state.Accounts.accounts,
  isLoading: state.CashTransfer.isLoading,
  error: state.CashTransfer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CashTransfer);
