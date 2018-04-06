import { connect } from 'react-redux';
import * as formState from '../../../state/workout/interval-form';
import IntervalForm from './interval-form.component';

const mapStateToProps = state => ({
  repeat: formState.getRepeat(state),
  work: formState.getWork(state),
  rest: formState.getRest(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: event => event.preventDefault(),
  handleResetClick: () => dispatch(formState.resetForm()),
  handleRepeatChange: value => dispatch(formState.setRepeat(formState.positiveValue(value))),
  handleWorkChange: value => dispatch(formState.setWork(formState.positiveValue(value))),
  handleRestChange: value => dispatch(formState.setRest(formState.positiveValue(value)))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
