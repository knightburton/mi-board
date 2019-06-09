import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

import { logout, getDisplayName } from '../../store/profile';
import { toggleMobileDrawer } from '../../store/app';

import AppBar from './appbar.component';

const mapStateToProps = state => ({
  profileDisplayName: getDisplayName(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  logout: () => dispatch(logout(firebase)),
  toggleMobileDrawer: () => dispatch(toggleMobileDrawer())
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppBar);
