import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */

export const initialState = {
  isDrawerOpened: true,
  isMobileDrawerOpened: false
};

/**
 * ACTION TYPES
 */

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const TOGGLE_MOBILE_DRAWER = 'TOGGLE_MOBILE_DRAWER';

/**
 * ACTION CREATORS
 */

export const toggleDrawer = createAction(
  TOGGLE_DRAWER
);
export const toggleMobileDrawer = createAction(
  TOGGLE_MOBILE_DRAWER
);

/**
 * SELECTORS
 */

export const getIsDrawerOpened = state => state.app.isDrawerOpened;
export const getIsMobileDrawerOpened = state => state.app.isMobileDrawerOpened;

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [toggleDrawer]: state => ({ ...state, isDrawerOpened: !state.isDrawerOpened }),
    [toggleMobileDrawer]: state => ({ ...state, isMobileDrawerOpened: !state.isMobileDrawerOpened })
  },
  initialState
);
