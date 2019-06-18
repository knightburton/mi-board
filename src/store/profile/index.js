import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { setAppWaiting, addNotification } from '../app';

/**
 * INITIAL STATE
 */

export const initialState = {
  authInProgress: false
};

/**
 * ACTION TYPES
 */

export const SET_AUTH_IN_PROGRESS = 'SET_AUTH_IN_PROGRESS';

/**
 * ACTION CREATORS
 */

export const setAuthInProgress = createAction(
  SET_AUTH_IN_PROGRESS,
  authInProgress => authInProgress
);

/**
 * SELECTORS
 */

export const getAuthInProgress = state => state.user.authInProgress;

export const getFirebaseAuth = state => state.firebase.auth;
export const getFirebaseAuthError = state => state.firebase.authError;
export const getFirebaseAuthErrorMessage = createSelector(
  getFirebaseAuthError,
  authError => authError && authError.message
);
export const getFirebaseAuthIsLoaded = createSelector(
  getFirebaseAuth,
  auth => auth && auth.isLoaded
);
export const getFirebaseAuthIsEmpty = createSelector(
  getFirebaseAuth,
  auth => auth && auth.isEmpty
);
export const getProfile = createSelector(
  getFirebaseAuth,
  auth => {
    if (!auth) return null;
    return {
      name: auth.displayName,
      email: auth.email,
      emailVerified: auth.emailVerified,
      photoURL: auth.photoURL,
      lastLoginAt: auth.lastLoginAt,
      createdAt: auth.createdAt
    };
  }
);
export const getDisplayName = createSelector(
  getFirebaseAuth,
  auth => ((auth && auth.displayName) || auth.email) || null
);
export const getProfilePhotoUrl = createSelector(
  getFirebaseAuth,
  auth => (auth && auth.photoURL) || null
);
export const getProfileID = createSelector(
  getFirebaseAuth,
  auth => (auth && auth.uid) || null
);

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [setAuthInProgress]: (state, { payload: authInProgress }) => ({ ...state, authInProgress })
  },
  initialState
);

/**
 * ASYNC ACTION CREATORS
 */

export const login = (firebase, credentials) => async dispatch => {
  dispatch(setAuthInProgress(true));
  await firebase.login(credentials);
  dispatch(setAuthInProgress(false));
};

export const logout = firebase => async dispatch => {
  dispatch(setAuthInProgress(true));
  await firebase.logout();
  dispatch(setAuthInProgress(false));
};

export const updataAuthAndProfile = (firebase, attributes) => async dispatch => {
  dispatch(setAppWaiting(true));
  try {
    await firebase.updateAuth(attributes, true);
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setAppWaiting(false));
  }
};

export const updataEmail = (firebase, email) => async dispatch => {
  dispatch(setAppWaiting(true));
  try {
    await firebase.updateEmail(email, true);
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setAppWaiting(false));
  }
};

export const uploadProfilePhoto = (firebase, file) => async (dispatch, getState) => {
  dispatch(setAppWaiting(true));
  try {
    const storageRef = firebase.storage().ref();
    const profileID = getProfileID(getState());
    if (profileID) {
      const path = `profiles/${profileID}`;
      const { uploadTaskSnapshot: { metadata } } = await firebase.uploadFile(path, file);
      const downloadUrl = await storageRef.child(metadata.fullPath).getDownloadURL();
      await dispatch(updataAuthAndProfile(firebase, { photoURL: downloadUrl }));
    } else {
      dispatch(addNotification('There is no available profile', 'error'));
    }
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setAppWaiting(false));
  }
};
