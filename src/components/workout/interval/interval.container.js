import { connect } from 'react-redux';
import Interval from './interval.component';
import { getIntervalVisibility } from '../../../state/workout/interval';

const mapStateToProps = state => ({
  visible: getIntervalVisibility(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
