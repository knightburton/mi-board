import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

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
  await dispatch(setAuthInProgress(true));
  try {
    await firebase.login(credentials);
  } catch (error) {
  } finally {
    await dispatch(setAuthInProgress(false));
  }
};
