import reducer, * as interval from '../../../state/workout/interval';
import initialState from '../../../state/workout/interval/initial.state';

describe('interval action creators', () => {
  it('should create an action to toggle the visible state', () => {
    const expectedAction = {
      type: interval.TOGGLE_VISIBILITY
    };
    expect(interval.toggleVisibility()).toEqual(expectedAction);
  });

  it('should create an action to set the active state (true)', () => {
    const active = true;
    const expectedAction = {
      type: interval.SET_ACTIVE,
      active
    };
    expect(interval.setActive(true)).toEqual(expectedAction);
  });

  it('should create an action to set the active state (false)', () => {
    const active = false;
    const expectedAction = {
      type: interval.SET_ACTIVE,
      active
    };
    expect(interval.setActive(false)).toEqual(expectedAction);
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

  it('should handle SET_ACTIVE (false -> true)', () => {
    const active = true;
    const action = {
      type: interval.SET_ACTIVE,
      active
    };
    const expectedState = {
      visible: false,
      active: true
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_ACTIVE (true -> false)', () => {
    const active = false;
    const action = {
      type: interval.SET_ACTIVE,
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
    expect(reducer(initState, action)).toEqual(expectedState);
  });
});
