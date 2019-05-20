import DashboardIcon from '@material-ui/icons/Dashboard';
import WatchLaterIcon from '@material-ui/icons/WatchLaterOutlined';

export const DRAWER_WIDTH = 240;

export const DRAWER_MENU = [
  {
    key: 'dashboard',
    to: '/dashboard',
    exact: true,
    text: 'Dashboard',
    icon: DashboardIcon
  }, {
    key: 'time',
    to: '/time',
    exact: false,
    text: 'Time',
    icon: WatchLaterIcon
  }
];
