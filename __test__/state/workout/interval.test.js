import reducer, * as interval from '../../../src/state/workout/interval';
import initialState from '../../../src/state/workout/interval/initial.state';

describe('interval action creators', () => {
  it('should create an action to toggle the visible state', () => {
    const expectedAction = {
      type: interval.TOGGLE_VISIBILITY
    };
    expect(interval.toggleVisibility()).toEqual(expectedAction);
  });

  it('should create an action to toggle the active state', () => {
    const expectedAction = {
      type: interval.TOGGLE_ACTIVE
    };
    expect(interval.toggleActive()).toEqual(expectedAction);
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
    expect(interval.getVisibility(state)).toEqual(true);
  });

  it('should return the visible state (false)', () => {
    const state = {
      workout: {
        interval: {
          visible: false
        }
      }
    };
    expect(interval.getVisibility(state)).toEqual(false);
  });

  it('should return the active state (true)', () => {
    const state = {
      workout: {
        interval: {
          active: true
        }
      }
    };
    expect(interval.getActive(state)).toEqual(true);
  });


  it('should return the active state (false)', () => {
    const state = {
      workout: {
        interval: {
          active: false
        }
      }
    };
    expect(interval.getActive(state)).toEqual(false);
  });
});

describe('interval reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_VISIBILITY (false -> true)', () => {
    const action = {
      type: interval.TOGGLE_VISIBILITY
    };
    const expectedState = {
      visible: true,
      active: false
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_VISIBILITY (true -> false)', () => {
    const action = {
      type: interval.TOGGLE_VISIBILITY
    };
    const initState = {
      visible: true,
      active: false
    };
    const expectedState = {
      visible: false,
      active: false
    };
    expect(reducer(initState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_ACTIVE (false -> true)', () => {
    const action = {
      type: interval.TOGGLE_ACTIVE
    };
    const expectedState = {
      visible: false,
      active: true
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_ACTIVE (true -> false)', () => {
    const action = {
      type: interval.TOGGLE_ACTIVE
    };
    const initState = {
      visible: false,
      active: true
    };
    const expectedState = {
      visible: false,
      active: false
    };
    expect(reducer(initState, action)).toEqual(expectedState);
  });
});
