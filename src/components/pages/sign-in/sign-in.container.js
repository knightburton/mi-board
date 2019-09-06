import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import { getAuthInProgress, getFirebaseAuthErrorMessage, signIn } from '../../../store/profile';
import SignIn from './sign-in.component';

const mapStateToProps = state => ({
  authInProgress: getAuthInProgress(state),
  error: getFirebaseAuthErrorMessage(state),
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  signIn: credentials => dispatch(signIn(firebase, credentials))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(SignIn);
