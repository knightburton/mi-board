import { combineReducers } from 'redux';
import interval from './interval';
import intervalForm from './interval-form';

export default combineReducers({
  interval,
  intervalForm
});
