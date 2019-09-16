import * as app from '.';

const utils = require('../../utils');

/**
 * Mock Data
 */

const timestamp = 1568643721973;
const section = 'section';
const message = 'This is a test notification.';
const notifications = [
  {
    key: timestamp,
    message,
    variant: 'info',
  },
  {
    key: timestamp + 123,
    message,
    variant: 'error',
  },
];
const state = {
  app: {
    isDrawerOpened: false,
    isMobileDrawerOpened: true,
    appWaiting: 2,
    sectionWaiting: {
      [section]: 1,
    },
    notifications,
  },
};

/**
 * UNIT TESTS
 */

describe('App Action Creators', () => {
  test(app.TOGGLE_DRAWER, () => {
    expect(app.toggleDrawer()).toEqual({
      type: app.TOGGLE_DRAWER,
    });
  });

  test(app.TOGGLE_MOBILE_DRAWER, () => {
    expect(app.toggleMobileDrawer()).toEqual({
      type: app.TOGGLE_MOBILE_DRAWER,
    });
  });

  test(`${app.SET_APP_WAITING} (true)`, () => {
    expect(app.setAppWaiting(true)).toEqual({
      type: app.SET_APP_WAITING,
      payload: true,
    });
  });

  test(`${app.SET_APP_WAITING} (false)`, () => {
    expect(app.setAppWaiting(false)).toEqual({
      type: app.SET_APP_WAITING,
      payload: false,
    });
  });

  test(`${app.SET_SECTION_WAITING} (true, '${section}')`, () => {
    expect(app.setSectionWaiting(true, section)).toEqual({
      type: app.SET_SECTION_WAITING,
      payload: {
        waiting: true,
        section,
      },
    });
  });

  test(`${app.SET_SECTION_WAITING} (false, '${section}')`, () => {
    expect(app.setSectionWaiting(false, section)).toEqual({
      type: app.SET_SECTION_WAITING,
      payload: {
        waiting: false,
        section,
      },
    });
  });

  test(`${app.ADD_NOTIFICATION} ('${message}', ${notifications[0].variant})`, () => {
    expect(app.addNotification(message, notifications[0].variant)).toEqual({
      type: app.ADD_NOTIFICATION,
      payload: {
        message,
        variant: notifications[0].variant,
      },
    });
  });

  test(`${app.ADD_NOTIFICATION} ('${message}', ${notifications[1].variant})`, () => {
    expect(app.addNotification(message, notifications[1].variant)).toEqual({
      type: app.ADD_NOTIFICATION,
      payload: {
        message,
        variant: notifications[1].variant,
      },
    });
  });

  test(`${app.REMOVE_NOTIFICATION} (${notifications[0].key})`, () => {
    expect(app.removeNotification(notifications[0].key)).toEqual({
      type: app.REMOVE_NOTIFICATION,
      payload: notifications[0].key,
    });
  });

  test(`${app.REMOVE_NOTIFICATION} (${notifications[1].key})`, () => {
    expect(app.removeNotification(notifications[1].key)).toEqual({
      type: app.REMOVE_NOTIFICATION,
      payload: notifications[1].key,
    });
  });

  test(app.REMOVE_ALL_NOTIFICATION, () => {
    expect(app.removeAllNotification()).toEqual({
      type: app.REMOVE_ALL_NOTIFICATION,
    });
  });
});


describe('App Selectors', () => {
  test('getIsDrawerOpened', () => {
    expect(app.getIsDrawerOpened(state)).toEqual(state.app.isDrawerOpened);
  });

  test('getIsMobileDrawerOpened', () => {
    expect(app.getIsMobileDrawerOpened(state)).toEqual(state.app.isMobileDrawerOpened);
  });

  test('getAppWaitingCounter', () => {
    expect(app.getAppWaitingCounter(state)).toEqual(state.app.appWaiting);
  });

  test(`getIsAppWaiting (appWaiting: ${state.app.appWaiting})`, () => {
    expect(app.getIsAppWaiting(state)).toEqual(true);
  });

  test('getIsAppWaiting (appWaiting: 0)', () => {
    const localState = {
      ...state,
      app: {
        ...state.app,
        appWaiting: 0,
      },
    };

    expect(app.getIsAppWaiting(localState)).toEqual(false);
  });

  test('getSectionWaiting', () => {
    expect(app.getSectionWaiting(state)).toEqual(state.app.sectionWaiting);
  });

  test(`getIsSectionWaiting (${section}: ${state.app.sectionWaiting[section]})`, () => {
    expect(app.getIsSectionWaiting(section)(state)).toEqual(true);
  });

  test(`getIsSectionWaiting (${section}: 0)`, () => {
    const localState = {
      ...state,
      app: {
        ...state.app,
        sectionWaiting: {
          ...state.sectionWaiting,
          [section]: 0,
        },
      },
    };

    expect(app.getIsSectionWaiting(section)(localState)).toEqual(false);
  });

  test('getNotifications', () => {
    expect(app.getNotifications(state)).toEqual(state.app.notifications);
  });
});

describe('App Reducer', () => {
  let localState = app.initialState;

  beforeAll(() => {
    utils.getTimestamp = jest.fn(() => timestamp);
  });

  beforeEach(() => {
    localState = app.initialState;
  });

  afterAll(() => {
    jest.unmock('../../utils');
  });

  test('Initial State', () => {
    expect(localState).toEqual(app.initialState);
  });

  test(`${app.TOGGLE_DRAWER} (false -> true)`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.TOGGLE_DRAWER,
      })
    );
    expected.toHaveProperty('isDrawerOpened', true);
  });

  test(`${app.TOGGLE_DRAWER} (true -> false)`, () => {
    const newState = {
      ...localState,
      isDrawerOpened: true,
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.TOGGLE_DRAWER,
      })
    );
    expected.toHaveProperty('isDrawerOpened', false);
  });

  test(`${app.TOGGLE_MOBILE_DRAWER} (false -> true)`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.TOGGLE_MOBILE_DRAWER,
      })
    );
    expected.toHaveProperty('isMobileDrawerOpened', true);
  });

  test(`${app.TOGGLE_MOBILE_DRAWER} (true -> false)`, () => {
    const newState = {
      ...localState,
      isMobileDrawerOpened: true,
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.TOGGLE_MOBILE_DRAWER,
      })
    );
    expected.toHaveProperty('isMobileDrawerOpened', false);
  });

  test(`${app.SET_APP_WAITING} (0 -> 1)`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.SET_APP_WAITING,
        payload: true,
      })
    );
    expected.toHaveProperty('appWaiting', 1);
  });

  test(`${app.SET_APP_WAITING} (1 -> 0)`, () => {
    const newState = {
      ...localState,
      appWaiting: 1,
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.SET_APP_WAITING,
        payload: false,
      })
    );
    expected.toHaveProperty('appWaiting', 0);
  });

  test(`${app.SET_SECTION_WAITING} (section 0 -> 1)`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.SET_SECTION_WAITING,
        payload: {
          waiting: true,
          section,
        },
      })
    );
    expected.toHaveProperty('sectionWaiting.section', 1);
  });

  test(`${app.SET_SECTION_WAITING} (section 1 -> 2)`, () => {
    const newState = {
      ...localState,
      sectionWaiting: {
        ...localState.sectionWaiting,
        section: 1,
      },
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.SET_SECTION_WAITING,
        payload: {
          waiting: true,
          section,
        },
      })
    );
    expected.toHaveProperty('sectionWaiting.section', 2);
  });

  test(`${app.SET_SECTION_WAITING} (section 2 -> 1)`, () => {
    const newState = {
      ...localState,
      sectionWaiting: {
        ...localState.sectionWaiting,
        section: 2,
      },
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.SET_SECTION_WAITING,
        payload: {
          waiting: false,
          section,
        },
      })
    );
    expected.toHaveProperty('sectionWaiting.section', 1);
  });

  test(`${app.SET_SECTION_WAITING} (section 1 -> remove)`, () => {
    const newState = {
      ...localState,
      sectionWaiting: {
        ...localState.sectionWaiting,
        section: 1,
      },
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.SET_SECTION_WAITING,
        payload: {
          waiting: false,
          section,
        },
      })
    );
    expected.toHaveProperty('sectionWaiting', {});
  });

  test(`${app.ADD_NOTIFICATION}, (${message})`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.ADD_NOTIFICATION,
        payload: {
          message,
        },
      })
    );
    expected.toHaveProperty('notifications', [notifications[0]]);
  });

  test(`${app.ADD_NOTIFICATION}, (${message}, 'error')`, () => {
    const expected = expect(
      app.reducer(localState, {
        type: app.ADD_NOTIFICATION,
        payload: {
          message,
          variant: 'error',
        },
      })
    );
    expected.toHaveProperty('notifications', [{
      ...notifications[1],
      key: notifications[1].key - 123,
    }]);
  });

  test(`${app.REMOVE_NOTIFICATION}, (${notifications[0].key} -> [])`, () => {
    const newState = {
      ...localState,
      notifications: [
        notifications[0],
      ],
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.REMOVE_NOTIFICATION,
        payload: notifications[0].key,
      })
    );
    expected.toHaveProperty('notifications', []);
  });

  test(`${app.REMOVE_NOTIFICATION}, (${notifications[0].key} -> [...])`, () => {
    const newState = {
      ...localState,
      notifications,
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.REMOVE_NOTIFICATION,
        payload: notifications[1].key,
      })
    );
    expected.toHaveProperty('notifications', [notifications[0]]);
  });

  test(app.REMOVE_ALL_NOTIFICATION, () => {
    const newState = {
      ...localState,
      notifications,
    };
    const expected = expect(
      app.reducer(newState, {
        type: app.REMOVE_ALL_NOTIFICATION,
      })
    );
    expected.toHaveProperty('notifications', []);
  });
});
