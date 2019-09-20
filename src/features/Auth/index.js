import { connect } from 'react-redux';
import Auth from './components/feature';
import { auth } from '../../redux/auth/auth.actions';

const mapDispatchToProps = dispatch => ({
  onAuth: (username, password, device) => {
    dispatch(auth({ username, password, device }));
  },
});

const mapStateToProps = state => ({
  isLoading: state.Auth.isLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
