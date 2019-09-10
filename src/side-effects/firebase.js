import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

export const fConfig = {
  apiKey: 'AIzaSyAV7DjVwDy7HePlIBzOU7uN9tu2B7sTWio',
  authDomain: 'mi-board.firebaseapp.com',
  databaseURL: 'https://mi-board.firebaseio.com',
  projectId: 'mi-board',
  storageBucket: 'mi-board.appspot.com',
  messagingSenderId: '177718294395',
};

export const rfConfig = {
  userProfile: 'profiles',
  useFirestoreForProfile: true,
  useFirestoreForStorageMeta: true,
};

firebase.initializeApp(fConfig);
firebase.firestore();
firebase.storage();

export default firebase;
