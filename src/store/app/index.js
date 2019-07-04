import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';

/**
 * INITIAL STATE
 */

export const initialState = {
  isDrawerOpened: false,
  isMobileDrawerOpened: false,
  appWaiting: 0,
  sectionWaiting: {},
  notifications: []
};

/**
 * ACTION TYPES
 */

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const TOGGLE_MOBILE_DRAWER = 'TOGGLE_MOBILE_DRAWER';

export const SET_APP_WAITING = 'SET_APP_WAITING';
export const SET_SECTION_WAITING = 'SET_SECTION_WAITING';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
export const REMOVE_ALL_NOTIFICATION = 'REMOVE_ALL_NOTIFICATION';

/**
 * ACTION CREATORS
 */

export const toggleDrawer = createAction(
  TOGGLE_DRAWER
);
export const toggleMobileDrawer = createAction(
  TOGGLE_MOBILE_DRAWER
);

export const setAppWaiting = createAction(
  SET_APP_WAITING,
  waiting => waiting
);
export const setSectionWaiting = createAction(
  SET_SECTION_WAITING,
  (waiting, section) => ({ waiting, section })
);

export const addNotification = createAction(
  ADD_NOTIFICATION,
  (message, variant) => ({ message, variant })
);
export const removeNotification = createAction(
  REMOVE_NOTIFICATION,
  key => key
);
export const removeAllNotification = createAction(
  REMOVE_ALL_NOTIFICATION
);

/**
 * SELECTORS
 */

export const getIsDrawerOpened = state => state.app.isDrawerOpened;
export const getIsMobileDrawerOpened = state => state.app.isMobileDrawerOpened;
export const getAppWaitingCounter = state => state.app.appWaiting;
export const getIsAppWaiting = createSelector(
  getAppWaitingCounter,
  counter => counter > 0
);
export const getSectionWaiting = state => state.app.sectionWaiting;
export const getIsSectionWaiting = section => createSelector(
  getSectionWaiting,
  sectionWaiting => !!sectionWaiting[section] && sectionWaiting[section] > 0
);
export const getNotifications = state => state.app.notifications;

/**
 * REDUCER
 */

export const reducer = handleActions(
  {
    [toggleDrawer]: state => ({ ...state, isDrawerOpened: !state.isDrawerOpened }),
    [toggleMobileDrawer]: state => ({ ...state, isMobileDrawerOpened: !state.isMobileDrawerOpened }),
    [setAppWaiting]: (state, { payload: waiting }) => ({
      ...state,
      appWaiting: waiting ? state.appWaiting + 1 : state.appWaiting - 1
    }),
    [setSectionWaiting]: (state, { payload: { waiting, section } }) => ({
      ...state,
      sectionWaiting: waiting
        ? { ...state.sectionWaiting, [section]: (state.sectionWaiting[section] || 0) + 1 }
        : Object.keys(state.sectionWaiting).reduce((o, s) => ({
          ...o,
          ...s === section && state.sectionWaiting[section] === 1
            ? {}
            : { [section]: state.sectionWaiting[section] - 1 }
        }), {})
    }),
    [addNotification]: (state, { payload: { message, variant = 'info' } }) => ({
      ...state,
      notifications: [
        ...state.notifications,
        { key: new Date().getTime(), message, variant }
      ]
    }),
    [removeNotification]: (state, { payload: key }) => ({
      ...state,
      notifications: state.notifications.filter(notification => notification.key !== key)
    }),
    [removeAllNotification]: state => ({ ...state, notifications: [] })
  },
  initialState
);
