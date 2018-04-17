import initialState from './initial.state';

// Action types
export const SET_INTERVAL_REPEAT = 'SET_INTERVAL_REPEAT';
export const SET_INTERVAL_WORK = 'SET_INTERVAL_WORK';
export const SET_INTERVAL_REST = 'SET_INTERVAL_REST';
export const RESET_INTERVAL_FORM = 'RESET_INTERVAL_FORM';

// Actions
export const setIntervalRepeat = value => ({
  type: SET_INTERVAL_REPEAT,
  value
});

export const setIntervalWork = value => ({
  type: SET_INTERVAL_WORK,
  value
});

export const setIntervalRest = value => ({
  type: SET_INTERVAL_REST,
  value
});

export const resetIntervalForm = () => ({
  type: RESET_INTERVAL_FORM
});

// Selectors
export const getIntervalRepeat = state => state.workout.intervalForm.repeat;
export const getIntervalWork = state => state.workout.intervalForm.work;
export const getIntervalRest = state => state.workout.intervalForm.rest;

// Helpers

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INTERVAL_REPEAT:
      return {...state, repeat: action.value};
    case SET_INTERVAL_WORK:
      return {...state, work: action.value};
    case SET_INTERVAL_REST:
      return {...state, rest: action.value};
    case RESET_INTERVAL_FORM:
      return initialState;
    default:
      return state;
  }
};
