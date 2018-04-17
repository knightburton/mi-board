import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import { getIntervalWork, getIntervalRest, getIntervalRepeat } from '../../../state/workout/interval-form';
import { getIntervalActive, setIntervalActive } from '../../../state/workout/interval';
import { toggleIntervalVisibility } from '../../../state/workout/interval';
import { getClock, getInterval, startTimer, stopTimer, resetTimer, increaseTimer } from '../../../state/workout/timer';

const mapStateToProps = state => ({
  work: getIntervalWork(state),
  rest: getIntervalRest(state),
  repeat: getIntervalRepeat(state),
  round: Math.floor(getClock(state) / (getIntervalWork(state) + getIntervalRest(state))) + 1,
  clock: getClock(state),
  active: getIntervalActive(state),
  intervalId: getInterval(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => {
    dispatch(setIntervalActive(true));
    dispatch(startTimer(
      Date.now(),
      setInterval(() => dispatch(increaseTimer()), 1000)
    ));
  },
  handleStopClick: intervalId => {
    dispatch(setIntervalActive(false));
    clearInterval(intervalId);
    dispatch(stopTimer());
  },
  handleResetClick: () => dispatch(resetTimer()),
  handleSettingsClick: () => dispatch(toggleIntervalVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
