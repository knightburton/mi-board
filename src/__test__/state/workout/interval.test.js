import * as interval from '../../../state/workout/interval';
import initialState from '../../../state/workout/interval/initial.state';

describe('interval action creators', () => {
  it('should create an action to toggle the visible state', () => {
    const expectedAction = {
      type: interval.TOGGLE_INTERVAL_VISIBILITY
    };
    expect(interval.toggleIntervalVisibility()).toEqual(expectedAction);
  });

  it('should create an action to set the active state (true)', () => {
    const active = true;
    const expectedAction = {
      type: interval.SET_INTERVAL_ACTIVE,
      active
    };
    expect(interval.setIntervalActive(true)).toEqual(expectedAction);
  });

  it('should create an action to set the active state (false)', () => {
    const active = false;
    const expectedAction = {
      type: interval.SET_INTERVAL_ACTIVE,
      active
    };
    expect(interval.setIntervalActive(false)).toEqual(expectedAction);
  });
});

describe('interval selectors', () => {
  it('should return the visible state (true)', () => {
    const state = {
      workout: {
        interval: {
          visible: true
        }
      }
    };
    expect(interval.getIntervalVisibility(state)).toEqual(true);
  });

  it('should return the visible state (false)', () => {
    const state = {
      workout: {
        interval: {
          visible: false
        }
      }
    };
    expect(interval.getIntervalVisibility(state)).toEqual(false);
  });

  it('should return the active state (true)', () => {
    const state = {
      workout: {
        interval: {
          active: true
        }
      }
    };
    expect(interval.getIntervalActive(state)).toEqual(true);
  });


  it('should return the active state (false)', () => {
    const state = {
      workout: {
        interval: {
          active: false
        }
      }
    };
    expect(interval.getIntervalActive(state)).toEqual(false);
  });
});

describe('interval reducer', () => {
  it('should return the initial state', () => {
    expect(interval.default(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_INTERVAL_VISIBILITY (false -> true)', () => {
    const action = {
      type: interval.TOGGLE_INTERVAL_VISIBILITY
    };
    const expectedState = {
      visible: true,
      active: false
    };
    expect(interval.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_INTERVAL_VISIBILITY (true -> false)', () => {
    const action = {
      type: interval.TOGGLE_INTERVAL_VISIBILITY
    };
    const initState = {
      visible: true,
      active: false
    };
    const expectedState = {
      visible: false,
      active: false
    };
    expect(interval.default(initState, action)).toEqual(expectedState);
  });

  it('should handle SET_INTERVAL_ACTIVE (false -> true)', () => {
    const active = true;
    const action = {
      type: interval.SET_INTERVAL_ACTIVE,
      active
    };
    const expectedState = {
      visible: false,
      active: true
    };
    expect(interval.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_INTERVAL_ACTIVE (true -> false)', () => {
    const active = false;
    const action = {
      type: interval.SET_INTERVAL_ACTIVE,
      active
    };
    const initState = {
      visible: false,
      active: true
    };
    const expectedState = {
      visible: false,
      active: false
    };
    expect(interval.default(initState, action)).toEqual(expectedState);
  });
});
