import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';

import ActionsMenu from './actions-menu.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(ActionsMenu);
