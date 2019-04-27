import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import history from '../side.effects/history';
import firebase from '../side.effects/firebase';
import rootReducer from './root.reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({
    history,
    getFirestore,
    getFirebase
  })
);

const enhancers = [
  middlewares,
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, { attachAuthIsReady: true })
];

export const store = isDevelopment
  ? createStore(rootReducer, composeWithDevTools(...enhancers))
  : createStore(rootReducer, compose(...enhancers));
