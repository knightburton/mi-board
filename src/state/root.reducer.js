import { combineReducers } from 'redux';
import workout from './workout/workout.reducer';
import todos from './todos';

export default combineReducers({
  workout,
  todos
});
