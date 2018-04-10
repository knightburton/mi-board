import initialState from './initial.state';

// Action types
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';

// Actions
export const toggleVisibility = () => ({
  type: TOGGLE_VISIBILITY
});

// Selectors
export const getVisibility = state => state.workout.interval.visible;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {...state, visible: !state.visible};
    default:
      return state;
  }
};
