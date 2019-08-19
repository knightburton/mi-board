import { connect } from 'react-redux';
import {
  getActiveTimer,
  getOffset,
  getIntervalID,
  getClock,
  getStopwatchLaps,
  setActiveTimer,
  startTimer,
  stopTimer,
  resetTimer,
  increaseTimer,
  addStopwatchLap,
  clearStopwatchLaps
} from '../../../../store/time';
import Stopwatch from './stopwatch.component';

const mapStateToProps = state => ({
  activeTimer: getActiveTimer(state),
  offset: getOffset(state),
  intervalID: getIntervalID(state),
  clock: getClock(state),
  laps: getStopwatchLaps(state)
});

const mapDispatchToProps = {
  setActiveTimer,
  startTimer,
  stopTimer,
  resetTimer,
  increaseTimer,
  addStopwatchLap,
  clearStopwatchLaps
};

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
