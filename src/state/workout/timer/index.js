import initialState from './initial.state';

// Action types
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const INCREASE_TIMER = 'INCREASE_TIMER';
export const DECREASE_TIMER = 'DECREASE_TIMER';

// Action creators
export const startTimer = (offset, interval) => ({
  type: START_TIMER,
  offset,
  interval
});

export const stopTimer = () => ({
  type: STOP_TIMER
});

export const resetTimer = ()=> ({
  type: RESET_TIMER
});

export const increaseTimer = () => ({
  type: INCREASE_TIMER
});

export const decreaseTimer = () => ({
  type: DECREASE_TIMER
});

// Selectors
export const getOffset = state => state.workout.timer.offset;
export const getClock = state => state.workout.timer.clock;
export const getInterval = state => state.workout.timer.interval;

// Helpers
export const minClockValue = 0;
export const maxClockValue = 86400;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        offset: action.offset,
        interval: action.interval
      };
    case STOP_TIMER:
      return {
        ...state,
        interval: null
      };
    case RESET_TIMER:
      return {
        ...state,
        clock: null
      };
    case INCREASE_TIMER:
      return {
        ...state,
        clock: state.clock === maxClockValue ? state.clock : ++state.clock
      };
    case DECREASE_TIMER:
      return {
        ...state,
        clock: state.clock === minClockValue ? state.clock : --state.clock
      };
    default:
      return state;
  }
};
