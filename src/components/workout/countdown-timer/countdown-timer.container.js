import { connect } from 'react-redux';
import { getCountdownTime } from '../../../state/workout/countdown-form';
import { getCountdownActive, setCountdownActive, toggleCountdownVisibility } from '../../../state/workout/countdown';
import { getClock, getInterval, startTimer, stopTimer, increaseTimer, resetTimer } from '../../../state/workout/timer';
import CountdownTimer from './countdown-timer.conponent';

const mapStateToProps = state => ({
  time: getCountdownTime(state),
  clock: getClock(state),
  active: getCountdownActive(state),
  intervalId: getInterval(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => {
    dispatch(setCountdownActive(true));
    dispatch(startTimer(
      Date.now(),
      setInterval(() => dispatch(increaseTimer()), 1000)
    ));
  },
  handleStopClick: intervalId => {
    dispatch(setCountdownActive(false));
    clearInterval(intervalId);
    dispatch(stopTimer());
  },
  handleResetClick: () => dispatch(resetTimer()),
  handleSettingsClick: () => dispatch(toggleCountdownVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(CountdownTimer);
