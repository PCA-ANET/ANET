import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../../components/Ui/Modal/Modal';
import { t } from '../../../i18n';
import { resetPassword } from '../../../redux/auth/auth.actions';

class ResetPassword extends Component {
  state = {
    identification: '',
    email: '',
    accountNumber: '',
    showModel: false,
  };
  _handleFormSubmit = () => {
    const { identification, email, accountNumber } = this.state;
    this.props.sendResetPasswordRequest({
      phone: identification,
      mail: email,
      accountNumber: accountNumber,
    });
  };

  _handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  _initState = () => {
    this.setState({
      identification: '',
      email: '',
      accountNumber: '',
    });
  };
  render() {
    return (
      <Modal
        text={t('Auth:resetPasswordModelTitle')}
        show={this.props.modalShow}
        modalClosed={() => {
          this.props.handleClose();
          this._initState();
        }}
        submitForm={this._handleFormSubmit}
      >
        <div className="form-group">
          <input
            className="form-control"
            name="identification"
            type="text"
            value={this.state.identification}
            onChange={this._handleInputChange}
            placeholder={t('Auth:identificationPlaceholder')}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this._handleInputChange}
            placeholder={t('Auth:emailPlaceholder')}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="accountNumber"
            type="text"
            value={this.state.accountNumber}
            onChange={this._handleInputChange}
            placeholder={t('Auth:accountNumberPlaceholder')}
          />
        </div>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sendResetPasswordRequest: resetPasswordData => {
    dispatch(resetPassword(resetPasswordData));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ResetPassword);
