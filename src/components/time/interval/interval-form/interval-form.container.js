import { connect } from 'react-redux';
import {
  setIntervalParams,
  setVisibleTimer
} from '../../../../store/time';
import IntervalForm from './interval-form.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  setIntervalParams,
  setVisibleTimer
};

export default connect(mapStateToProps, mapDispatchToProps)(IntervalForm);
