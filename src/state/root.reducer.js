import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import workout from './workout/workout.reducer';

export default combineReducers({
  router: routerReducer,
  workout
});
