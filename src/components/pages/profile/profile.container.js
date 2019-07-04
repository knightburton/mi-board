import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import {
  getProfile,
  updataAuth,
  updataEmail,
  uploadProfilePhoto,
  deleteProfilePhoto
} from '../../../store/profile';

import Profile from './profile.component';

const mapStateToProps = state => ({
  profile: getProfile(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  updataAuth: attributes => dispatch(updataAuth(firebase, attributes, true)),
  updataEmail: email => dispatch(updataEmail(firebase, email)),
  uploadProfilePhoto: file => dispatch(uploadProfilePhoto(firebase, file)),
  deleteProfilePhoto: () => dispatch(deleteProfilePhoto(firebase))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
