import { connect } from 'react-redux';
import Account from './components/feature';
import { getSelectedAccount } from '../../redux/accounts/accounts.selectors';
import {
  toggleModal,
  activateTab,
} from '../../redux/accounts/accounts.actions';

const mapStateToProps = state => ({
  accounts: state.Accounts.accounts,
  selectedAccount: getSelectedAccount(state),
  selectedAccountId: state.Accounts.selectedAccountId,
  activeTab: state.Accounts.activeTab,
});
const mapDispatchToProps = dispatch => ({
  toggleModal: () => {
    dispatch(toggleModal());
  },
  activateTab: activeTab => {
    dispatch(activateTab(activeTab));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
