import { connect } from 'react-redux';
import IntervalTimer from './interval-timer.component';
import { setActive } from '../../../state/workout/interval';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSettingsClick: () => dispatch(setActive(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
