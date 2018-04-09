import initialState from './initial.state';

// Action types
export const SET_REPEAT = 'SET_REPEAT';
export const SET_WORK = 'SET_WORK';
export const SET_REST = 'SET_REST';
export const RESET_FORM = 'RESET_FORM';

// Actions
export const setRepeat = value => ({
  type: SET_REPEAT,
  value
});

export const setWork = value => ({
  type: SET_WORK,
  value
});

export const setRest = value => ({
  type: SET_REST,
  value
});

export const resetForm = () => ({
  type: RESET_FORM
});

// Selectors
export const getRepeat = state => state.workout.intervalForm.repeat;
export const getWork = state => state.workout.intervalForm.work;
export const getRest = state => state.workout.intervalForm.rest;

// Helpers

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REPEAT:
      return {...state, repeat: action.value};
    case SET_WORK:
      return {...state, work: action.value};
    case SET_REST:
      return {...state, rest: action.value};
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
