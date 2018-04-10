import { connect } from 'react-redux';
import * as formState from '../../../state/workout/interval-form';
import { toggleVisibility } from '../../../state/workout/interval';
import IntervalForm from './interval-form.component';

const mapStateToProps = state => ({
  repeat: formState.getRepeat(state),
  work: formState.getWork(state),
  rest: formState.getRest(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: event => {
    event.preventDefault();
    dispatch(toggleVisibility());
  },
  handleResetClick: () => dispatch(formState.resetForm()),
  handleRepeatChange: value => dispatch(formState.setRepeat(value)),
  handleWorkChange: value => dispatch(formState.setWork(value)),
  handleRestChange: value => dispatch(formState.setRest(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
