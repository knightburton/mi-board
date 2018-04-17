import * as form from '../../../state/workout/countdown-form';
import initialState from '../../../state/workout/countdown-form/initial.state';

describe('countdown-form action creators', () => {
  // Time
  it('should create an action to set time value (1)', () => {
    const time = 1;
    const expectedAction = {
      type: form.SET_COUNTDOWN_TIME,
      time
    };
    expect(form.setCountdownTime(time)).toEqual(expectedAction);
  });

  it('should create an action to set time value (2)', () => {
    const time = 2;
    const expectedAction = {
      type: form.SET_COUNTDOWN_TIME,
      time
    };
    expect(form.setCountdownTime(time)).toEqual(expectedAction);
  });

  it('should create an action to set time value (-1)', () => {
    const time = -1;
    const expectedAction = {
      type: form.SET_COUNTDOWN_TIME,
      time
    };
    expect(form.setCountdownTime(time)).toEqual(expectedAction);
  });

  it('should create an action to set time value (25487)', () => {
    const time = 25487;
    const expectedAction = {
      type: form.SET_COUNTDOWN_TIME,
      time
    };
    expect(form.setCountdownTime(time)).toEqual(expectedAction);
  });

  // Reset
  it('should create an action to reset values', () => {
    const expectedAction = {
      type: form.RESET_COUNTDOWN_FORM
    };
    expect(form.resetCountdownForm()).toEqual(expectedAction);
  });
});

describe('countdown-form selectors', () => {
  // Time
  it('should return the time value (null)', () => {
    const state = {
      workout: {
        countdownForm: {
          time: null
        }
      }
    };
    expect(form.getCountdownTime(state)).toEqual(null);
  });

  it('should return the time value (0)', () => {
    const state = {
      workout: {
        countdownForm: {
          time: 0
        }
      }
    };
    expect(form.getCountdownTime(state)).toEqual(0);
  });

  it('should return the time value (8526)', () => {
    const state = {
      workout: {
        countdownForm: {
          time: 8526
        }
      }
    };
    expect(form.getCountdownTime(state)).toEqual(8526);
  });
});

describe('countdown-form reducer', () => {
  it('should return the initial state', () => {
    expect(form.default(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_COUNTDOWN_TIME', () => {
    const action = {
      type: form.SET_COUNTDOWN_TIME,
      time: 30
    };
    const expectedState = {
      time: 30
    };
    expect(form.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_COUNTDOWN_TIME', () => {
    const time = 987;
    const action = {
      type: form.SET_COUNTDOWN_TIME,
      time
    };
    const state = {
      time: 554
    };
    const expectedState = {
      time
    };
    expect(form.default(state, action)).toEqual(expectedState);
  });

  it('should handle RESET_COUNTDOWN_FORM', () => {
    const action = {
      type: form.RESET_COUNTDOWN_FORM
    };
    const state = {
      time: 8852
    };
    expect(form.default(state, action)).toEqual(initialState);
  });
});
