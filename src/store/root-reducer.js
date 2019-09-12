import { combineReducers } from 'redux';

import { firestoreReducer as firestore } from 'redux-firestore';
import { firebaseReducer as firebase } from 'react-redux-firebase';

import { reducer as app } from './app';
import { reducer as profile } from './profile';
import { reducer as time } from './time';
import { reducer as todo } from './todo';

export default combineReducers({
  app,
  time,
  profile,
  todo,
  firestore,
  firebase,
});
