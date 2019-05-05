import { connect } from 'react-redux';
import App from './app.component';
import { getFirebaseAuthIsLoaded, getFirebaseAuthIsEmpty } from '../store/user';

const mapStateToProps = state => ({
  authIsLoaded: getFirebaseAuthIsLoaded(state),
  authIsEmpty: getFirebaseAuthIsEmpty(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
