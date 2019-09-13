import { connect } from 'react-redux';
import {
  getActiveTimer,
} from '../../../../../store/time';
import IntervalTimer from './interval-timer.component';

const mapStateToProps = state => ({
  isActive: getActiveTimer(state) === 'interval',
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IntervalTimer);
