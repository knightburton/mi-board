import initialState from './initial.state';

// Action types
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';

// Actions
export const toggleVisibility = () => ({
  type: TOGGLE_VISIBILITY
});

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE
});

// Selectors
export const getVisibility = state => state.workout.interval.visible;
export const getActive = state => state.workout.interval.active;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {...state, visible: !state.visible};
    case TOGGLE_ACTIVE:
      return {...state, active: !state.active};
    default:
      return state;
  }
};
