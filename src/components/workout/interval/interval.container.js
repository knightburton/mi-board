import { connect } from 'react-redux';
import Interval from './interval.component';
import { getVisibility } from '../../../state/workout/interval';

const mapStateToProps = state => ({
  visible: getVisibility(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
