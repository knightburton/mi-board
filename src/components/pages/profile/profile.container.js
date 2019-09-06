import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import {
  updateAuth,
  updateEmail,
  uploadProfilePhoto,
  deleteProfilePhoto
} from '../../../store/profile';

import Profile from './profile.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  updateAuth: attributes => dispatch(updateAuth(firebase, attributes, true)),
  updateEmail: email => dispatch(updateEmail(firebase, email)),
  uploadProfilePhoto: file => dispatch(uploadProfilePhoto(firebase, file)),
  deleteProfilePhoto: () => dispatch(deleteProfilePhoto(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
