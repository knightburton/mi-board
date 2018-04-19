import * as stopwatch from '../../../state/workout/stopwatch';
import initialState from '../../../state/workout/stopwatch/initial.state';

describe('stopwatch action creators', () => {
  it('should create an action to set the active state (true)', () => {
    const active = true;
    const expectedAction = {
      type: stopwatch.SET_STOPWATCH_ACTIVE,
      active
    };
    expect(stopwatch.setStopwatchActive(active)).toEqual(expectedAction);
  });

  it('should create an action to set the active state (false)', () => {
    const active = false;
    const expectedAction = {
      type: stopwatch.SET_STOPWATCH_ACTIVE,
      active
    };
    expect(stopwatch.setStopwatchActive(active)).toEqual(expectedAction);
  });

  it('should create an action to add a lap to the state (1524)', () => {
    const lap = 1524;
    const expectedAction = {
      type: stopwatch.ADD_STOPWATCH_LAP,
      lap
    };
    expect(stopwatch.addStopwatchLap(lap)).toEqual(expectedAction);
  });

  it('should create an action to add a lap to the state (9999)', () => {
    const lap = 9999;
    const expectedAction = {
      type: stopwatch.ADD_STOPWATCH_LAP,
      lap
    };
    expect(stopwatch.addStopwatchLap(lap)).toEqual(expectedAction);
  });

  it('should create an action to clear the laps', () => {
    const expectedAction = {
      type: stopwatch.CLEAR_STOPWATCH_LAPS
    };
    expect(stopwatch.clearStopwatchLaps()).toEqual(expectedAction);
  });
});

describe('stopwatch selectors', () => {
  it('should return the active state (false)', () => {
    const state = {
      workout: {
        stopwatch: {
          active: false
        }
      }
    };
    expect(stopwatch.getStopwatchActive(state)).toEqual(false);
  });

  it('should return the active state (true)', () => {
    const state = {
      workout: {
        stopwatch: {
          active: true
        }
      }
    };
    expect(stopwatch.getStopwatchActive(state)).toEqual(true);
  });

  it('should return the laps state (empty array)', () => {
    const laps = [];
    const state = {
      workout: {
        stopwatch: {
          laps
        }
      }
    };
    expect(stopwatch.getStopwatchLaps(state)).toEqual(laps);
  });

  it('should return the laps state (array with 1 number element)', () => {
    const laps = [1254];
    const state = {
      workout: {
        stopwatch: {
          laps
        }
      }
    };
    expect(stopwatch.getStopwatchLaps(state)).toEqual(laps);
  });

  it('should return the laps state (array with 4 number element)', () => {
    const laps = [1254, 5547, 7, 456];
    const state = {
      workout: {
        stopwatch: {
          laps
        }
      }
    };
    expect(stopwatch.getStopwatchLaps(state)).toEqual(laps);
  });
});

describe('stopwatch reducers', () => {
  it('should return the initial state', () => {
    expect(stopwatch.default(undefined, {})).toEqual(initialState);
  });

  it('should handle the SET_STOPWATCH_ACTIVE action (true)', () => {
    const active = true;
    const action = {
      type: stopwatch.SET_STOPWATCH_ACTIVE,
      active
    };
    const expectedState = {
      ...initialState,
      active
    };
    expect(stopwatch.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle the SET_STOPWATCH_ACTIVE action (false)', () => {
    const active = false;
    const action = {
      type: stopwatch.SET_STOPWATCH_ACTIVE,
      active
    };
    const expectedState = {
      ...initialState,
      active
    };
    expect(stopwatch.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle the ADD_STOPWATCH_LAP action [123], [123, 7896]', () => {
    const lap = 123;
    const action = {
      type: stopwatch.ADD_STOPWATCH_LAP,
      lap
    };
    const expectedState = {
      ...initialState,
      laps: [...initialState.laps, lap]
    };
    expect(stopwatch.default(initialState, action)).toEqual(expectedState);

    const lap2 = 7896;
    const action2 = {
      type: stopwatch.ADD_STOPWATCH_LAP,
      lap: lap2
    };
    const expectedState2 = {
      ...expectedState,
      laps: [...expectedState.laps, lap2]
    };
    expect(stopwatch.default(expectedState, action2)).toEqual(expectedState2);
  });

  it('should handle the ADD_STOPWATCH_LAP action [9874]', () => {
    const lap = 9874;
    const action = {
      type: stopwatch.ADD_STOPWATCH_LAP,
      lap
    };
    const expectedState = {
      ...initialState,
      laps: [...initialState.laps, lap]
    };
    expect(stopwatch.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle the CLEAR_STOPWATCH_LAPS action in case of initial state', () => {
    const action = {
      type: stopwatch.CLEAR_STOPWATCH_LAPS
    };
    const expectedState = {
      ...initialState,
      laps: []
    };
    expect(stopwatch.default(initialState, action)).toEqual(expectedState);
  });

  it('should handle the CLEAR_STOPWATCH_LAPS action', () => {
    const action = {
      type: stopwatch.CLEAR_STOPWATCH_LAPS
    };
    const state = {
      ...initialState,
      laps: [4578, 558, 785]
    };
    const expectedState = {
      ...initialState,
      laps: []
    };
    expect(stopwatch.default(state, action)).toEqual(expectedState);
  });
});
