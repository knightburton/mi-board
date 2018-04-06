import { connect } from 'react-redux';
import * as formState from '../../../state/workout/interval-form';
import { setActive } from '../../../state/workout/interval';
import IntervalForm from './interval-form.component';

const mapStateToProps = state => ({
  repeat: formState.getRepeat(state),
  work: formState.getWork(state),
  rest: formState.getRest(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: event => {
    event.preventDefault();
    dispatch(setActive(true));
  },
  handleResetClick: () => dispatch(formState.resetForm()),
  handleRepeatChange: value => dispatch(formState.setRepeat(formState.positiveValue(value))),
  handleWorkChange: value => dispatch(formState.setWork(formState.positiveValue(value))),
  handleRestChange: value => dispatch(formState.setRest(formState.positiveValue(value)))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
