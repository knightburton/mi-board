import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import { logout } from '../../store/user';
import Navbar from './navbar.jsx';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  logout: () => dispatch(logout(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Navbar);
