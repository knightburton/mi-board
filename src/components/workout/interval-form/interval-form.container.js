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
  handleRepeatChange: event => dispatch(formState.setRepeat(parseInt(event.target.value))),
  handleWorkChange: event => dispatch(formState.setWork(parseInt(event.target.value))),
  handleRestChange: event => dispatch(formState.setRest(parseInt(event.target.value)))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
