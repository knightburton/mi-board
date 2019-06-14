import { compose } from 'redux';
import { connect } from 'react-redux';
import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect';
import { getProfileData, updataAuthAndProfile } from '../../store/profile';

import Profile from './profile.component';

const mapStateToProps = state => ({
  profileData: getProfileData(state)
});

const mapDispatchToProps = (dispatch, { firebase }) => ({
  updataAuthAndProfile: attributes => dispatch(updataAuthAndProfile(firebase, attributes))
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
