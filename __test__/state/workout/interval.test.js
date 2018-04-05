import reducer, { SET_ACTIVE, setActive, getActive } from '../../../src/state/workout/interval';
import initialState from '../../../src/state/workout/interval/initial.state';

describe('interval action creators', () => {
  it('should create an action to set active state (true)', () => {
    const active = true;
    const expectedAction = {
      type: SET_ACTIVE,
      active
    };
    expect(setActive(active)).toEqual(expectedAction);
  });

  it('should create an action to set active state (false)', () => {
    const active = false;
    const expectedAction = {
      type: SET_ACTIVE,
      active
    };
    expect(setActive(active)).toEqual(expectedAction);
  });
});

describe('interval selectors', () => {
  it('should return the active state (true)', () => {
    const state = {
      workout: {
        interval: {
          active: true
        }
      }
    };
    expect(getActive(state)).toEqual(true);
  });

  it('should return the active state (false)', () => {
    const state = {
      workout: {
        interval: {
          active: false
        }
      }
    };
    expect(getActive(state)).toEqual(false);
  });
});

describe('interval reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_ACTIVE (true)', () => {
    const action = {
      type: SET_ACTIVE,
      active: true
    };
    const expectedState = {
      active: true
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_ACTIVE (false)', () => {
    const action = {
      type: SET_ACTIVE,
      active: false
    };
    const expectedState = {
      active: false
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
