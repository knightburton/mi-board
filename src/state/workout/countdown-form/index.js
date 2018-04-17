import initialState from './initial.state';

// Action types
export const SET_COUNTDOWN_TIME = 'SET_COUNTDOWN_TIME';
export const RESET_COUNTDOWN_FORM = 'RESET_COUNTDOWN_FORM';

// Action creators
export const setCountdownTime = time => ({
  type: SET_COUNTDOWN_TIME,
  time
});

export const resetCountdownForm = () => ({
  type: RESET_COUNTDOWN_FORM
});

// Selectors
export const getCountdownTime = state => state.workout.countdownForm.time;

// Reducers
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COUNTDOWN_TIME:
      return {
        ...state,
        time: action.time
      };
    case RESET_COUNTDOWN_FORM:
      return initialState;
    default:
      return state;
  }
};
