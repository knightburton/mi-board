import { connect } from 'react-redux';
import { setIntervalParams } from '../../../store/time';
import Interval from './interval.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setIntervalParams
};

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
