import initialState from './initial.state';

// Action types
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const SET_ACTIVE = 'SET_ACTIVE';

// Actions
export const toggleVisibility = () => ({
  type: TOGGLE_VISIBILITY
});

export const setActive = active => ({
  type: SET_ACTIVE,
  active
});

// Selectors
export const getVisibility = state => state.workout.interval.visible;
export const getActive = state => state.workout.interval.active;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {...state, visible: !state.visible};
    case SET_ACTIVE:
      return {...state, active: action.active};
    default:
      return state;
  }
};
