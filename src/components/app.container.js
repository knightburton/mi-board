import { connect } from 'react-redux';
import App from './app.component';
import { getFirebaseAuthIsLoaded, getFirebaseAuthIsEmpty } from '../store/profile';

const mapStateToProps = state => ({
  authIsLoaded: getFirebaseAuthIsLoaded(state),
  authIsEmpty: getFirebaseAuthIsEmpty(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
