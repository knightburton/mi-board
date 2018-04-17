import { connect } from 'react-redux';
import { getCountdownTime, setCountdownTime, resetCountdownForm } from '../../../state/workout/countdown-form';
import { toggleCountdownVisibility } from '../../../state/workout/countdown';
import CountdownForm from './countdown-form.component';

const mapStateToProps = state => ({
  time: getCountdownTime(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: event => {
    event.preventDefault();
    dispatch(toggleCountdownVisibility());
  },
  handleResetClick: () => dispatch(resetCountdownForm()),
  handleTimeChange: value => dispatch(setCountdownTime(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountdownForm);
