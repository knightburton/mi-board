import initialState from './initial.state';

// Action types
export const SET_ACTIVE = 'SET_ACTIVE';

// Actions
export const setActive = active => {
  type: SET_ACTIVE,
  active
};

// Selectors
export const getActive = state => state.workout.interval.active;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE:
      return {...state, active: action.active}
    default:
      return state;
  }
};
