import initialState from './initial.state';

// Action types
export const SET_REPEAT = 'SET_REPEAT';
export const SET_WORK = 'SET_WORK';
export const SET_REST = 'SET_REST';

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

// Selectors
export const getRepeat = state => state.workout.intervalForm.repeat;
export const getWork = state => state.workout.intervalForm.work;
export const getRest = state => state.workout.intervalForm.rest;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_REPEAT:
      return {...state, repeat: action.value};
    case SET_WORK:
      return {...state, work: action.value};
    case SET_REST:
      return {...state, rest: action.value};
    default:
      return state;
  }
};
