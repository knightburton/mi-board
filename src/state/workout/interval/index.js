import initialState from './initial.state';

// Action types
export const TOGGLE_INTERVAL_VISIBILITY = 'TOGGLE_INTERVAL_VISIBILITY';
export const SET_INTERVAL_ACTIVE = 'SET_INTERVAL_ACTIVE';

// Actions
export const toggleIntervalVisibility = () => ({
  type: TOGGLE_INTERVAL_VISIBILITY
});

export const setIntervalActive = active => ({
  type: SET_INTERVAL_ACTIVE,
  active
});

// Selectors
export const getIntervalVisibility = state => state.workout.interval.visible;
export const getIntervalActive = state => state.workout.interval.active;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_INTERVAL_VISIBILITY:
      return {...state, visible: !state.visible};
    case SET_INTERVAL_ACTIVE:
      return {...state, active: action.active};
    default:
      return state;
  }
};
