import { connect } from 'react-redux';
import {
  getStopwatchLaps,
  clearStopwatchLaps
} from '../../../../../store/time';

import LapsActionsMenu from './laps-actions-menu.component';

const mapStateToProps = state => ({
  lapsLength: getStopwatchLaps(state).length
});

const mapDispatchToProps = {
  clearStopwatchLaps
};

export default connect(mapStateToProps, mapDispatchToProps)(LapsActionsMenu);
