import { createAction, handleActions } from 'redux-actions';

/**
 * CONSTANTS
 */
export const MIN_CLOCK_VALUE = 0;
export const MAX_CLOCK_VALUE = 86400;

/**
 * INITIAL STATE
 */

export const intialState = {
  offset: null,
  clock: 0,
  intervalID: null,
  interval: {
    repeat: 0,
    warmup: 0,
    high: 0,
    low: 0,
    cooldown: 0
  },
  countdown: {
    time: 0
  },
  stopwatch: {
    laps: []
  },
  active: null,
  visible: null
};

/**
 * ACTION TYPES
 */

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const INCREASE_TIMER = 'INCREASE_TIMER';
export const DECREASE_TIMER = 'DECREASE_TIMER';

export const SET_INTERVAL_PARAMS = 'SET_INTERVAL_PARAMS';
export const RESET_INTERVAL_PARAMS = 'RESET_INTERVAL_PARAMS';

export const SET_COUNTDOWN_TIME = 'SET_COUNTDOWN_TIME';
export const RESET_COUNTDOWN_TIME = 'RESET_COUNTDOWN_TIME';

export const ADD_STOPWATCH_LAP = 'ADD_STOPWATCH_LAP';
export const CLEAR_STOPWATCH_LAPS = 'CLEAR_STOPWATCH_LAPS';

export const SET_ACTIVE_TIMER = 'SET_ACTIVE_TIMER';
export const SET_VISIBLE_TIMER = 'SET_VISIBLE_TIMER';

/**
 * ACTION CREATORS
 */

export const startTimer = createAction(
  START_TIMER,
  (offset, intervalID) => ({ offset, intervalID })
);
export const stopTimer = createAction(
  STOP_TIMER
);
export const resetTimer = createAction(
  RESET_TIMER
);
export const increaseTimer = createAction(
  INCREASE_TIMER
);
export const decreaseTimer = createAction(
  DECREASE_TIMER
);

export const setIntervalParams = createAction(
  SET_INTERVAL_PARAMS,
  (repeat, warmup, hight, low, cooldown) => ({ repeat, warmup, hight, low, cooldown })
);
export const resetIntervalParams = createAction(
  RESET_INTERVAL_PARAMS
);

export const setCountdownTime = createAction(
  SET_COUNTDOWN_TIME,
  time => time
);
export const resetCountdownTime = createAction(
  RESET_COUNTDOWN_TIME
);

export const addStopwatchLap = createAction(
  ADD_STOPWATCH_LAP,
  lap => lap
);
export const clearStopwatchLaps = createAction(
  CLEAR_STOPWATCH_LAPS
);

export const setActiveTimer = createAction(
  SET_ACTIVE_TIMER,
  timer => timer
);
export const setVisibleTimer = createAction(
  SET_VISIBLE_TIMER,
  timer => timer
);

/**
 * SELECTORS
 */

export const getOffset = state => state.time.offset;
export const getClock = state => state.time.clock;
export const getIntervalID = state => state.time.intervalID;

export const getIntervalParams = state => state.time.interval;
export const getIntervalRepeat = state => state.time.interval.repeat;
export const getIntervalWarmup = state => state.time.interval.warmup;
export const getIntervalHight = state => state.time.interval.high;
export const getIntervalLow = state => state.time.interval.low;
export const getIntervalCooldown = state => state.time.interval.cooldown;

export const getCountdownTime = state => state.time.countdown.time;

export const getStopwatchLaps = state => state.time.stopwatch.laps;

export const getActiveTimer = state => state.time.active;
export const getVisibleTimer = state => state.time.visible;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [startTimer]: (state, { payload: { offset, intervalID } }) => ({ ...state, offset, intervalID }),
    [stopTimer]: state => ({ ...state, intervalID: null }),
    [resetTimer]: state => ({ ...state, clock: 0 }),
    [increaseTimer]: state => ({ ...state, clock: state.clock === MAX_CLOCK_VALUE ? state.clock : ++state.clock }),
    [decreaseTimer]: state => ({ ...state, clock: state.clock === MIN_CLOCK_VALUE ? state.clock : --state.clock }),

    [setIntervalParams]: (state, { payload: { repeat, warmup, hight, low, cooldown } }) => ({ ...state, interval: { repeat, warmup, hight, low, cooldown } }),
    [resetIntervalParams]: state => ({ ...state, interval: intialState.interval }),

    [setCountdownTime]: (state, { payload: time }) => ({ ...state, countdown: { time } }),
    [resetCountdownTime]: state => ({ ...state, countdown: intialState.countdown }),

    [addStopwatchLap]: (state, { payload: lap }) => ({ ...state, stopwatch: { lap: [ ...state.stopwatch.laps, lap ] } }),
    [clearStopwatchLaps]: state => ({ ...state, stopwatch: intialState.stopwatch }),

    [setActiveTimer]: (state, { payload: timer }) => ({ ...state, active: timer }),
    [setVisibleTimer]: (state, { payload: timer }) => ({ ...state, visible: timer })
  },
  intialState
);
