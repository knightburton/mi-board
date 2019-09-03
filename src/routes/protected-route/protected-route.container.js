import { connect } from 'react-redux';
import ProtectedRoute from './protected-route.component';
import { getFirebaseAuthIsEmpty, getFirebaseAuthIsLoaded } from '../../store/profile';

const mapStateToProps = state => ({
  authIsEmpty: getFirebaseAuthIsEmpty(state),
  authIsLoaded: getFirebaseAuthIsLoaded(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
