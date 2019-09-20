import React from 'react';
import Stepper from '../../../components/Stepper/Stepper';
import Check from '@material-ui/icons/Check';
import Money from '@material-ui/icons/AttachMoney';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Beneficiaries from '../../../components/Beneficiaries/Beneficiaries';
import Montant from '../../../components/MontantForm/MontantForm';
import Recap from '../../../components/Recap/Recap';
import { t } from '../../../i18n';
import { connect } from 'react-redux';
import { getAccounts } from '../../../redux/accounts/accounts.actions';
import { TRANSFER_NAMESPACE } from '../constants';
import { getTransferBeneficiaries } from '../../../redux/beneficiaries/beneficiaries.actions';
import {
  initTransfer,
  validateTransfer,
  resendOtpTransfer,
} from '../../../redux/transfer/transfer.actions';
import Loader from '../../../components/Ui/Loader/Loader';

class Transfer extends React.Component {
  state = {
    selectedAccountId: '',
    selectedBeneficiaryId: '',
    selectedAccount: {},
    selectedBeneficiary: {},
    label: '',
    amount: '',
    favoris: false,
    codeValue: '',
  };

  _accountChangeHandler = accountId => {
    this.setState({ selectedAccountId: accountId });
  };
  _beneficiaryChangeHandler = beneficiaryId => {
    this.setState({ selectedBeneficiaryId: beneficiaryId });
  };
  _amountChangeHandler = amount => {
    this.setState({ amount: amount });
  };
  _labelChangeHandler = label => {
    this.setState({ label: label });
  };

  _toggleAlert = () => this.props.transferBeneficiaries.length === 0;

  componentDidMount() {
    this.props.getAccounts();
    this.props.getTransferBeneficiaries();
  }

  favorisHandler = childData => {
    this.setState({ favoris: childData });
  };
  handleChange = event => {
    this.setState({ codeValue: event.target.value });
  };
  submit1Handler = () => {
    let selectedClientAccount = this.props.accounts.filter(
      account => account.clientAccountId === this.state.selectedAccountId,
    );
    let selectedBeneficiary = this.props.transferBeneficiaries.filter(
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
    );
  };

  submit3Handler = () => {
    this.props.resendOtp(localStorage.getItem('otpId'));
  };
  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-sm-12">
        
          <div className="wizard-row">
         
            <div className="panel panel-default panel-wizard">
              <Stepper
                elements={[
                  {
                    stepNumber: 0,
                    stepTitle: t(`${TRANSFER_NAMESPACE}beneficiaryStepTitle`),
                    stepIcon: <GroupAddIcon />,
                    stepRender: (
                      <Beneficiaries
                        selectedAccount={this.state.selectedAccountId}
                        selectedBeneficiary={this.state.selectedBeneficiaryId}
                        accountsList={this.props.accounts}
                        onAccountChange={this._accountChangeHandler}
                        showAlertEnabled={
                          this.props.transferBeneficiaries.length === 0
                        }
                        onBeneficiaryChange={this._beneficiaryChangeHandler}
                        beneficiariesList={this.props.transferBeneficiaries}
                      />
                    ),
                  },
                  {
                    stepNumber: 1,
                    stepTitle: t(`${TRANSFER_NAMESPACE}amountStepTitle`),
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
                    stepTitle: t(`${TRANSFER_NAMESPACE}recapStepTitle`),
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
                        pin={false}
                      />
                    ),
                  },
                  {
                    stepNumber: 3,
                    stepTitle: t(`${TRANSFER_NAMESPACE}confirmationStepTitle`),
                    stepIcon: <Check />,
                    stepRender: t(`${TRANSFER_NAMESPACE}recapSentence`, {
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
                    onBeneficiaryChange={this._beneficiaryChangeHandler}
                    beneficiariesList={this.props.transferBeneficiaries}
                  />
                }
                success={this.props.error===null ? (true) : (false)}
                isLoading={this.props.isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTransferBeneficiaries: () => {
    dispatch(getTransferBeneficiaries());
  },
  getAccounts: () => {
    dispatch(getAccounts());
  },
  init: (clientAccount, beneficiary, label, amount, description, favoris) => {
    dispatch(
      initTransfer({
        clientAccount,
        beneficiary,
        label,
        amount,
        description,
        favoris,
      }),
    );
  },
  validate: (otpId, otpValue, favoris) => {
    dispatch(
      validateTransfer({
        otpId,
        otpValue,
        favoris,
      }),
    );
  },
  resendOtp: otpId => {
    dispatch(
      resendOtpTransfer({
        otpId,
      }),
    );
  },
});

const mapStateToProps = state => ({
  transferBeneficiaries: state.Beneficiaries.transferBeneficiaries,
  accounts: state.Accounts.accounts,
  isLoading: state.Transfer.isLoading,
  error: state.Transfer.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transfer);
