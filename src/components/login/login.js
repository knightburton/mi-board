import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import { getAuthInProgress, getFirebaseAuthErrorMessage, login } from '../../store/user';
import Login from './login.jsx';

const mapStateToProps = state => ({
  authInProgress: getAuthInProgress(state),
  error: getFirebaseAuthErrorMessage(state),
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  login: credentials => dispatch(login(firebase, credentials))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
