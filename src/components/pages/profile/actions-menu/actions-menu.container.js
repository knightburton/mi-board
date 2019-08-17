import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import {
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteProfile
} from '../../../../store/profile';

import ActionsMenu from './actions-menu.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  sendEmailVerification: () => dispatch(sendEmailVerification(firebase)),
  sendPasswordResetEmail: () => dispatch(sendPasswordResetEmail(firebase)),
  deleteProfile: () => dispatch(deleteProfile(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(ActionsMenu);
