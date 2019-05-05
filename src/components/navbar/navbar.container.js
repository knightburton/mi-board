import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../store/user';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import Navbar from './navbar.component';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  logout: () => dispatch(logout(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar);
