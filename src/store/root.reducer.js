import { combineReducers } from 'redux';

import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

export default combineReducers({
  firestore,
  firebase
});
