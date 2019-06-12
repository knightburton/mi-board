import { connect } from 'react-redux';
import App from './app.component';
import { getFirebaseAuthIsLoaded, getFirebaseAuthIsEmpty } from '../store/profile';
import { getIsAppWaiting } from '../store/app';

const mapStateToProps = state => ({
  authIsLoaded: getFirebaseAuthIsLoaded(state),
  authIsEmpty: getFirebaseAuthIsEmpty(state),
  isAppWaiting: getIsAppWaiting(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
