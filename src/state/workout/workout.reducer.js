import { combineReducers } from 'redux';
import interval from './interval';
import intervalForm from './interval-form';
import timer from './timer';

export default combineReducers({
  interval,
  intervalForm,
  timer
});
