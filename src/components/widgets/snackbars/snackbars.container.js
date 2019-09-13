import { connect } from 'react-redux';
import {
  getNotifications,
  removeNotification,
  removeAllNotification,
} from '../../../store/app';
import Snackbars from './snackbars.component';

const mapStateToProps = state => ({
  notifications: getNotifications(state),
});

const mapDispatchToProps = {
  removeNotification,
  removeAllNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Snackbars);
