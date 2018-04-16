import * as countdown from '../../../state/workout/countdown';
import initialState from '../../../state/workout/countdown/initial.state';

describe('countdown action creators', () => {
  it('should create an action to toggle the visible state', () => {
    const expectedAction = {
      type: countdown.TOGGLE_COUNTDOWN_VISIBILITY
    };
    expect(countdown.toggleCountdownVisibility()).toEqual(expectedAction);
  });

  it('should create an action to set the active state (true)', () => {
    const active = true;
    const expectedAction = {
      type: countdown.SET_COUNTDOWN_ACTIVE,
      active
    };
    expect(countdown.setCountdownActive(true)).toEqual(expectedAction);
  });

  it('should create an action to set the active state (false)', () => {
    const active = false;
    const expectedAction = {
      type: countdown.SET_COUNTDOWN_ACTIVE,
      active
    };
    expect(countdown.setCountdownActive(false)).toEqual(expectedAction);
  });
});

describe('countdown selectors', () => {
  it('should return the visible state (true)', () => {
    const state = {
      workout: {
        countdown: {
          visible: true
        }
      }
    };
    expect(countdown.getCountdownVisibility(state)).toEqual(true);
  });

  it('should return the visible state (false)', () => {
    const state = {
      workout: {
        countdown: {
          visible: false
        }
      }
    };
    expect(countdown.getCountdownVisibility(state)).toEqual(false);
  });

  it('should return the active state (true)', () => {
    const state = {
      workout: {
        countdown: {
          active: true
        }
      }
    };
    expect(countdown.getCountdownActive(state)).toEqual(true);
  });


  it('should return the active state (false)', () => {
    const state = {
      workout: {
        countdown: {
          active: false
        }
      }
    };
    expect(countdown.getCountdownActive(state)).toEqual(false);
  });
});

describe('countdown reducer', () => {
  it('should return the initial state', () => {
    expect(countdown.default(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_COUNTDOWN_VISIBILITY (false -> true)', () => {
    const action = {
      type: countdown.TOGGLE_COUNTDOWN_VISIBILITY
    };
    const expectedState = {
      visible: true,
      active: false
    };
    expect(countdown.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle TOGGLE_COUNTDOWN_VISIBILITY (true -> false)', () => {
    const action = {
      type: countdown.TOGGLE_COUNTDOWN_VISIBILITY
    };
    const initState = {
      visible: true,
      active: false
    };
    const expectedState = {
      visible: false,
      active: false
    };
    expect(countdown.default(initState, action)).toEqual(expectedState);
  });

  it('should handle SET_COUNTDOWN_ACTIVE (false -> true)', () => {
    const active = true;
    const action = {
      type: countdown.SET_COUNTDOWN_ACTIVE,
      active
    };
    const expectedState = {
      visible: false,
      active: true
    };
    expect(countdown.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_COUNTDOWN_ACTIVE (true -> false)', () => {
    const active = false;
    const action = {
      type: countdown.SET_COUNTDOWN_ACTIVE,
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
    expect(countdown.default(initState, action)).toEqual(expectedState);
  });
});
