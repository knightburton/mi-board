import { connect } from 'react-redux';
import Interval from './interval.component';
import { getActive } from '../../../state/workout/interval';

const mapStateToProps = state => ({
  active: getActive(state)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
