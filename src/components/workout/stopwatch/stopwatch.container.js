import { connect } from 'react-redux';
import Stopwatch from './stopwatch.component';
import {
  getStopwatchActive, getStopwatchLaps,
  setStopwatchActive, addStopwatchLap, clearStopwatchLaps
} from '../../../state/workout/stopwatch';
import { getClock, getInterval, startTimer, stopTimer, resetTimer, increaseTimer } from '../../../state/workout/timer';

const mapStateToProps = state => ({
  laps: getStopwatchLaps(state),
  clock: getClock(state),
  active: getStopwatchActive(state),
  intervalId: getInterval(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => {
    dispatch(setStopwatchActive(true));
    dispatch(startTimer(
      Date.now(),
      setInterval(() => dispatch(increaseTimer()), 1000)
    ));
  },
  handleStopClick: intervalId => {
    dispatch(setStopwatchActive(false));
    clearInterval(intervalId);
    dispatch(stopTimer());
  },
  handleResetClick: () => dispatch(resetTimer()),
  handleLapClick: lap => dispatch(addStopwatchLap(lap)),
  handleClearLapsClick: () => dispatch(clearStopwatchLaps())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);
