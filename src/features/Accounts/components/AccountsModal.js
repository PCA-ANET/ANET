import React from 'react';
import BackDrop from '../../../components/Ui/BackDrop/BackDrop';
import { t } from '../../../i18n';
import {
  selectAccount,
  toggleModal,
} from '../../../redux/accounts/accounts.actions';
import { connect } from 'react-redux';

class AccountsModal extends React.PureComponent {
  state = { tempSelectedAccountId: this.props.selectedAccountId };

  _isChecked = clientAccountId =>
    this.state.tempSelectedAccountId &&
    clientAccountId.toString() === this.state.tempSelectedAccountId.toString();

  _handleAccountChange = changeEvent => {
    this.setState({
      tempSelectedAccountId: changeEvent.target.value,
    });
  };

  _toggleModal = () => {
    this.props.toggleModal();
  };

  _handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.props.selectAccount(this.state.tempSelectedAccountId);
    this._toggleModal();
  };

  _renderAccounts = () => {
    if (this.props.accounts.length > 0) {
      return (
        <div className="form-group">
          <div className="col-sm-12">
            <form onSubmit={this._handleFormSubmit}>
              {this.props.accounts.map((account, index) => {
                const { clientAccountId, accountName, accountNumber } = account;
                return (
                  <div className="bcp-radio bcp-radio-color inline" key={index}>
                    <input
                      id={clientAccountId}
                      type="radio"
                      name="rad9"
                      value={clientAccountId}
                      checked={this._isChecked(clientAccountId)}
                      onChange={this._handleAccountChange}
                    />
                    <label htmlFor={clientAccountId}>
                      {`${accountName} n° ${accountNumber}`}
                    </label>
                  </div>
                );
              })}
            </form>
          </div>
        </div>
      );
    }
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.selectedAccountId !== this.props.selectedAccountId) {
      this.setState({ tempSelectedAccountId: this.props.selectedAccountId });
    }
  }

  render() {
    let modalClass = `modal_content modal-container colored-header colored-header-primary modal-effect-10 ${
      this.props.modalShow ? 'modal-show' : ''
    }`;
    return (
      <>
        <BackDrop show={this.props.modalShow} clicked={this._toggleModal} />
        <div
          className="modal_container popin-choice"
          style={{ fontSize: '20px' }}
        >
          <div className="modal-dialog">
            <div
              className={modalClass}
              style={{
                perspective: this.props.modalShow ? 'none' : '1300px',
                height: '424px',
              }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    className="modal-close close"
                    data-dismiss="modal"
                    onClick={this._toggleModal}
                  >
                    ×
                  </button>
                  <h4>{t('Accounts:chooseAccount')}</h4>
                </div>
                <div className="modal-body">{this._renderAccounts()}</div>
                <div className="modal-footer">
                  <p className="align_center" />
                  <button
                    disabled={this.state.tempSelectedAccountId === null}
                    className="modal-close btn-primary btn"
                    data-text="valider"
                    onClick={this._handleFormSubmit}
                  >
                    <span>{t('Components:validate')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectAccount: selectedAccountId => {
    dispatch(selectAccount(selectedAccountId));
  },
  toggleModal: () => {
    dispatch(toggleModal());
  },
});

const mapStateToProps = state => ({
  modalShow: state.Accounts.modalShow,
  selectedAccountId: state.Accounts.selectedAccountId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountsModal);
