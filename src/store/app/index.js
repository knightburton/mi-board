import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */

export const initialState = {
  isDrawerOpened: true
};

/**
 * ACTION TYPES
 */

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

/**
 * ACTION CREATORS
 */

export const toggleDrawer = createAction(
  TOGGLE_DRAWER
);

/**
 * SELECTORS
 */

export const getIsDrawerOpened = state => state.app.isDrawerOpened;

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [toggleDrawer]: state => ({ ...state, isDrawerOpened: !state.isDrawerOpened }),
  },
  initialState
);
