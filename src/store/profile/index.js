import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { setSectionWaiting, addNotification } from '../app';

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

export const getFirebaseProfile = state => state.firebase.profile;
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
  [getFirebaseAuth, getFirebaseProfile],
  (auth, profile) => auth && profile && {
    name: profile.displayName || auth.displayName,
    email: profile.email || auth.email,
    emailVerified: auth.emailVerified,
    photoURL: profile.photoURL || auth.photoURL,
    lastLoginAt: auth.lastLoginAt,
    createdAt: auth.createdAt
  }
);
export const getDisplayName = createSelector(
  getProfile,
  profile => ((profile && profile.name) || profile.email) || null
);
export const getProfilePhotoUrl = createSelector(
  getProfile,
  profile => (profile && profile.photoURL) || null
);
export const getProfilePhotoName = createSelector(
  getFirebaseProfile,
  profile => (profile && profile.photoName) || null
);
export const getProfileID = createSelector(
  getFirebaseAuth,
  auth => (auth && auth.uid) || null
);
export const getProfileEmail = createSelector(
  getFirebaseAuth,
  auth => (auth && auth.email) || null
);
export const getProfileEmailVerified = createSelector(
  getProfile,
  profile => profile.emailVerified
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

export const signIn = (firebase, credentials) => async (dispatch, getState, { history }) => {
  dispatch(setAuthInProgress(true));
  try {
    await firebase.login(credentials);
    history.push('/dashboard');
  } catch (error) {
    /* Handled by react-redux-firebase */
  } finally {
    dispatch(setAuthInProgress(false));
  }
};

export const signOut = firebase => async dispatch => {
  dispatch(setAuthInProgress(true));
  try {
    await firebase.logout();
  } catch (error) {
    /* Handled by react-redux-firebase */
  } finally {
    dispatch(setAuthInProgress(false));
  }
};

export const updateAuth = (firebase, attributes, updateProfile = false) => async dispatch => {
  dispatch(setSectionWaiting(true, 'profile'));
  try {
    await firebase.updateAuth(attributes, updateProfile);
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};

export const updateEmail = (firebase, email) => async dispatch => {
  dispatch(setSectionWaiting(true, 'profile'));
  try {
    await firebase.updateEmail(email, true);
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};

export const uploadProfilePhoto = (firebase, file) => async (dispatch, getState) => {
  dispatch(setSectionWaiting(true, 'profile'));
  try {
    const profileID = getProfileID(getState());
    const { uploadTaskSnapshot: { metadata } } = await firebase.uploadFile(`profiles/${profileID}`, file);
    const downloadUrl = await firebase.storage().ref().child(metadata.fullPath).getDownloadURL();
    await dispatch(updateAuth(firebase, { photoURL: downloadUrl, photoName: metadata.name }, true));
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};

export const deleteProfilePhoto = firebase => async (dispatch, getState) => {
  dispatch(setSectionWaiting(true, 'profile'));
  try {
    const profileID = getProfileID(getState());
    const profilePhotoName = getProfilePhotoName(getState());
    if (profilePhotoName) {
      await firebase.deleteFile(`profiles/${profileID}/${profilePhotoName}`);
      await dispatch(updateAuth(firebase, { photoURL: null, photoName: null }, true));
    } else {
      dispatch(addNotification('There is no available profile photo', 'error'));
    }
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};

export const sendEmailVerification = firebase => async dispatch => {
  try {
    await firebase.auth().currentUser.sendEmailVerification();
    dispatch(addNotification('Email has been sent tou your address', 'success'));
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  }
};

export const sendPasswordResetEmail = firebase => async (dispatch, getState) => {
  try {
    const email = getProfileEmail(getState());
    const isEmailVerified = getProfileEmailVerified(getState());
    if (isEmailVerified) await firebase.auth().sendPasswordResetEmail(email);
    else dispatch(addNotification('You have to verify your email address first', 'warning'));
    dispatch(addNotification('Password reset email has been sent to your address', 'success'));
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  }
};

export const deleteProfile = firebase => async (dispatch, getState, { history }) => {
  try {
    await firebase.auth().currentUser.delete();
    history.push('/');
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  }
};
