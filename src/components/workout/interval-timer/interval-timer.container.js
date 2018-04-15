import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import * as form from '../../../state/workout/interval-form';
import * as interval from '../../../state/workout/interval';
import { toggleVisibility } from '../../../state/workout/interval';
import * as timer from '../../../state/workout/timer';

const mapStateToProps = state => ({
  work: form.getWork(state),
  rest: form.getRest(state),
  repeat: form.getRepeat(state),
  round: Math.floor(timer.getClock(state) / (form.getWork(state) + form.getRest(state))) + 1,
  clock: timer.getClock(state),
  active: interval.getActive(state),
  intervalId: timer.getInterval(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => {
    dispatch(interval.setActive(true));
    dispatch(timer.startTimer(
      Date.now(),
      setInterval(() => dispatch(timer.increaseTimer()), 1000)
    ));
  },
  handleStopClick: intervalId => {
    dispatch(interval.setActive(false));
    clearInterval(intervalId);
    dispatch(timer.stopTimer());
  },
  handleResetClick: () => dispatch(timer.resetTimer()),
  handleSettingsClick: () => dispatch(toggleVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
