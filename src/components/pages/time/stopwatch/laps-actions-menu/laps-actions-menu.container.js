import { connect } from 'react-redux';
import {
  clearStopwatchLaps
} from '../../../../../store/time';

import LapsActionsMenu from './laps-actions-menu.component';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  clearStopwatchLaps
};

export default connect(mapStateToProps, mapDispatchToProps)(LapsActionsMenu);
