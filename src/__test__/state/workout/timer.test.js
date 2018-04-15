import * as timer from '../../../state/workout/timer';
import initialState from '../../../state/workout/timer/initial.state';

describe('timer action creators', () => {
  it('should create an action to start timer', () => {
    const offset = Date.now();
    const interval = 23;
    const expectedAction = {
      type: timer.START_TIMER,
      offset,
      interval
    };
    expect(timer.startTimer(offset, interval)).toEqual(expectedAction);
  });

  it('should create an action to set stop timer', () => {
    const expectedAction = {
      type: timer.STOP_TIMER
    };
    expect(timer.stopTimer()).toEqual(expectedAction);
  });

  it('should create an action to reset timer', () => {
    const expectedAction = {
      type: timer.RESET_TIMER
    };
    expect(timer.resetTimer()).toEqual(expectedAction);
  });

  it('should create an action to increase timer clock', () => {
    const expectedAction = {
      type: timer.INCREASE_TIMER
    };
    expect(timer.increaseTimer()).toEqual(expectedAction);
  });

  it('should create an action to decrease timer clock', () => {
    const expectedAction = {
      type: timer.DECREASE_TIMER
    };
    expect(timer.decreaseTimer()).toEqual(expectedAction);
  });
});

describe('timer selectors', () => {
  it('should return the offset state (null)', () => {
    const state = {
      workout: {
        timer: {
          offset: null
        }
      }
    };
    expect(timer.getOffset(state)).toEqual(null);
  });

  it('should return the offset state (Date.now())', () => {
    const offset = Date.now();
    const state = {
      workout: {
        timer: {
          offset
        }
      }
    };
    expect(timer.getOffset(state)).toEqual(offset);
  });

  it('should return the clock state (0)', () => {
    const state = {
      workout: {
        timer: {
          clock: 0
        }
      }
    };
    expect(timer.getClock(state)).toEqual(0);
  });

  it('should return the clock state (75)', () => {
    const state = {
      workout: {
        timer: {
          clock: 75
        }
      }
    };
    expect(timer.getClock(state)).toEqual(75);
  });

  it('should return the interval state (null)', () => {
    const state = {
      workout: {
        timer: {
          interval: null
        }
      }
    };
    expect(timer.getInterval(state)).toEqual(null);
  });

  it('should return the interval state (23)', () => {
    const state = {
      workout: {
        timer: {
          interval: 23
        }
      }
    };
    expect(timer.getInterval(state)).toEqual(23);
  });
});

describe('timer reducer', () => {
  it('should return the initial state', () => {
    expect(timer.default(undefined, {})).toEqual(initialState);
  });

  it('should handle START_TIMER action', () => {
    const offset = Date.now();
    const interval = 41;
    const action = {
      type: timer.START_TIMER,
      offset,
      interval
    };
    const expectedState = {
      ...initialState,
      offset,
      interval
    };
    expect(timer.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle STOP_TIMERSTOP_TIMER action', () => {
    const action = {
      type: timer.STOP_TIMER
    };
    const state = {
      ...initialState,
      interval: 33
    };
    const expectedState = {
      ...state,
      interval: null
    };
    expect(timer.default(state, action)).toEqual(expectedState);
  });

  it('should handle RESET_TIMER action', () => {
    const action = {
      type: timer.RESET_TIMER
    };
    const state = {
      ...initialState,
      clock: 8874
    };
    const expectedState = {
      ...state,
      clock: 0
    };
    expect(timer.default(state, action)).toEqual(expectedState);
  });

  it('should handle INCREASE_TIMER action', () => {
    const action = {
      type: timer.INCREASE_TIMER
    };
    const state = {
      ...initialState,
      clock: 10
    };
    const expectedState = {
      ...state,
      clock: 11
    };
    expect(timer.default(state, action)).toEqual(expectedState);

    state.clock = 11;
    expectedState.clock = 12;
    expect(timer.default(state, action)).toEqual(expectedState);

    state.clock = 12;
    expectedState.clock = 13;
    expect(timer.default(state, action)).toEqual(expectedState);
  });

  it('should handle DECREASE_TIMER action', () => {
    const action = {
      type: timer.DECREASE_TIMER
    };
    const state = {
      ...initialState,
      clock: 554
    };
    const expectedState = {
      ...state,
      clock: 553
    };
    expect(timer.default(state, action)).toEqual(expectedState);

    state.clock = 553;
    expectedState.clock = 552;
    expect(timer.default(state, action)).toEqual(expectedState);

    state.clock = 552;
    expectedState.clock = 551;
    expect(timer.default(state, action)).toEqual(expectedState);
  });
});
