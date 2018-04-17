import { connect } from 'react-redux';
import {
  getIntervalRepeat, getIntervalWork, getIntervalRest,
  resetIntervalForm, setIntervalRepeat, setIntervalWork, setIntervalRest
} from '../../../state/workout/interval-form';
import { toggleIntervalVisibility } from '../../../state/workout/interval';
import IntervalForm from './interval-form.component';

const mapStateToProps = state => ({
  repeat: getIntervalRepeat(state),
  work: getIntervalWork(state),
  rest: getIntervalRest(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: event => {
    event.preventDefault();
    dispatch(toggleIntervalVisibility());
  },
  handleResetClick: () => dispatch(resetIntervalForm()),
  handleRepeatChange: value => dispatch(setIntervalRepeat(value)),
  handleWorkChange: value => dispatch(setIntervalWork(value)),
  handleRestChange: value => dispatch(setIntervalRest(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
