import { combineReducers } from 'redux';
import interval from './interval';
import intervalForm from './interval-form';
import countdown from './countdown';
import countdownForm from './countdown-form';
import stopwatch from './stopwatch';
import timer from './timer';

export default combineReducers({
  interval,
  intervalForm,
  countdown,
  countdownForm,
  stopwatch,
  timer
});
