import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import * as form from '../../../state/workout/interval-form';
import * as interval from '../../../state/workout/interval';
import { toggleVisibility } from '../../../state/workout/interval';
import * as timer from '../../../state/workout/timer';

const getCountDown = state => {
  const work = form.getWork(state);
  const rest = form.getRest(state);
  const repeat = form.getRepeat(state);
  const clock = timer.getClock(state);
  const mod = clock % (work + rest);
  return clock === ((work + rest) * repeat) ? {
    value: 0,
    color: 'dark'
  } : mod < work ? {
    value: work - mod,
    color: 'info'
  } : {
    value: rest - (mod - work),
    color: 'warning'
  };
};

const getRound = state => {
  const work = form.getWork(state);
  const rest = form.getRest(state);
  return Math.floor(timer.getClock(state) / (work + rest)) + 1;
};

const getPercentage = state => (
  Math.trunc(timer.getClock(state) / ((form.getWork(state) + form.getRest(state)) * form.getRepeat(state)) * 100)
);

const mapStateToProps = state => ({
  repeat: form.getRepeat(state),
  round: getRound(state),
  active: interval.getActive(state),
  percentage: getPercentage(state),
  color: getCountDown(state).color,
  mainTime: timer.getTime(getCountDown(state).value),
  overallTime: timer.getTime(timer.getClock(state)),
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
