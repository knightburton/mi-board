import { connect } from 'react-redux';
import Countdown from './countdown.component';
import { getCountdownVisibility } from '../../../state/workout/countdown';

const mapStateToProps = state => ({
  visible: getCountdownVisibility(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
