import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../store/user';
import { getIsDrawerOpened, toggleMobileDrawer } from '../../store/app';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import AppBar from './appbar.component';

const mapStateToProps = state => ({
  isDrawerOpened: getIsDrawerOpened(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  logout: () => dispatch(logout(firebase)),
  toggleMobileDrawer: () => dispatch(toggleMobileDrawer())
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppBar);
