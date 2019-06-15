import { connect } from 'react-redux';
import { getVisibleTimer } from '../../../../store/time';
import Interval from './interval.component';

const mapStateToProps = state => ({
  visibleTimer: getVisibleTimer(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
