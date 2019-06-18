import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import {
  getProfile,
  updataAuthAndProfile,
  updataEmail,
  uploadProfilePhoto
} from '../../../store/profile';

import Profile from './profile.component';

const mapStateToProps = state => ({
  profile: getProfile(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  updataAuthAndProfile: attributes => dispatch(updataAuthAndProfile(firebase, attributes)),
  updataEmail: email => dispatch(updataEmail(firebase, email)),
  uploadProfilePhoto: file => dispatch(uploadProfilePhoto(firebase, file))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
