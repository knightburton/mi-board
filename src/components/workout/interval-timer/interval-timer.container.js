import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import * as form from '../../../state/workout/interval-form';
import * as interval from '../../../state/workout/interval';
import { toggleVisibility } from '../../../state/workout/interval';

const mapStateToProps = state => ({
  work: form.getWork(state),
  rest: form.getRest(state),
  repeat: form.getRepeat(state),
  active: interval.getActive(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartStopClick: () => dispatch(interval.toggleActive()),
  handleResetClick: () => console.log('reset'),
  handleSettingsClick: () => dispatch(toggleVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
