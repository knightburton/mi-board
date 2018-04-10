import reducer, { TOGGLE_VISIBILITY, toggleVisibility, getVisibility } from '../../../src/state/workout/interval';
import initialState from '../../../src/state/workout/interval/initial.state';

describe('interval action creators', () => {
  it('should create an action to toggle the visible state', () => {
    const expectedAction = {
      type: TOGGLE_VISIBILITY
    };
    expect(toggleVisibility()).toEqual(expectedAction);
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
    expect(getVisibility(state)).toEqual(true);
  });

  it('should return the visible state (false)', () => {
    const state = {
      workout: {
        interval: {
          visible: false
        }
      }
    };
    expect(getVisibility(state)).toEqual(false);
  });
});

describe('interval reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_VISIBILITY (false -> true)', () => {
    const action = {
      type: TOGGLE_VISIBILITY
    };
    const expectedState = {
      visible: true
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_VISIBILITY (true -> false)', () => {
    const action = {
      type: TOGGLE_VISIBILITY
    };
    const initState = {
      visible: true
    };
    const expectedState = {
      visible: false
    };
    expect(reducer(initState, action)).toEqual(expectedState);
  });
});
