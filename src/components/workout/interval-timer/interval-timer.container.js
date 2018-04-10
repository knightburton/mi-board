import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import * as form from '../../../state/workout/interval-form';
import { toggleVisibility } from '../../../state/workout/interval';

const mapStateToProps = state => ({
  work: form.getWork(state),
  rest: form.getRest(state),
  repeat: form.getRepeat(state)
});

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => console.log('start'),
  handleStopClick: () => console.log('stop'),
  handleResetClick: () => console.log('reset'),
  handleSettingsClick: () => dispatch(toggleVisibility())
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
