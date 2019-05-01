import { combineReducers } from 'redux';

import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

import { reducer as user } from './user';

export default combineReducers({
  user,
  firestore,
  firebase
});
