import initialState from './initial.state';

// Action types
export const TOGGLE_COUNTDOWN_VISIBILITY = 'TOGGLE_COUNTDOWN_VISIBILITY';
export const SET_COUNTDOWN_ACTIVE = 'SET_COUNTDOWN_ACTIVE';

// Action creators
export const toggleCountdownVisibility = () => ({
  type: TOGGLE_COUNTDOWN_VISIBILITY
});

export const setCountdownActive = active => ({
  type: SET_COUNTDOWN_ACTIVE,
  active
});

// Selectors
export const getCountdownVisibility = state => state.workout.countdown.visible;
export const getCountdownActive = state => state.workout.countdown.active;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_COUNTDOWN_VISIBILITY:
      return {...state, visible: !state.visible};
    case SET_COUNTDOWN_ACTIVE:
      return {...state, active: action.active};
    default:
      return state;
  }
};
