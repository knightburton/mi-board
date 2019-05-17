import { combineReducers } from 'redux';

import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

import { reducer as app } from './app';
import { reducer as user } from './user';
import { reducer as time } from './time';

export default combineReducers({
  app,
  time,
  user,
  firestore,
  firebase
});
