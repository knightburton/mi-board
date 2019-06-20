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
  (auth, profile) => {
    if (!auth && !profile) return null;
    return {
      name: profile.displayName || auth.displayName,
      email: profile.email || auth.email,
      emailVerified: auth.emailVerified,
      photoURL: profile.photoURL || auth.photoURL,
      lastLoginAt: auth.lastLoginAt,
      createdAt: auth.createdAt
    };
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

export const updataAuth = (firebase, attributes, updateProfile = false) => async dispatch => {
  dispatch(setSectionWaiting(true, 'profile'));
  try {
    await firebase.updateAuth(attributes, updateProfile);
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};

export const updataEmail = (firebase, email) => async dispatch => {
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
    await dispatch(updataAuth(firebase, { photoURL: downloadUrl, photoName: metadata.name }, true));
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
      await dispatch(updataAuth(firebase, { photoURL: null, photoName: null }, true));
    } else {
      dispatch(addNotification('There is no available profile photo', 'error'));
    }
  } catch (error) {
    dispatch(addNotification(error.message, 'error'));
  } finally {
    dispatch(setSectionWaiting(false, 'profile'));
  }
};
