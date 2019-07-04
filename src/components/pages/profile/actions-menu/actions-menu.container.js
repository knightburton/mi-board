import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import {
  getProfileEmailVerified,
  sendEmailVerification,
  sendPasswordResetEmail
} from '../../../../store/profile';

import ActionsMenu from './actions-menu.component';

const mapStateToProps = state => ({
  emailVerified: getProfileEmailVerified(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  sendEmailVerification: () => dispatch(sendEmailVerification(firebase)),
  sendPasswordResetEmail: () => dispatch(sendPasswordResetEmail(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(ActionsMenu);
