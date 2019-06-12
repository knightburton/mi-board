import DashboardIcon from '@material-ui/icons/Dashboard';
import TimeIcon from '@material-ui/icons/WatchLaterOutlined';
import TodoIcon from '@material-ui/icons/PlaylistAddCheck';

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
    icon: TimeIcon
  },
  {
    key: 'todo',
    to: '/todo',
    exact: true,
    text: 'To Do List',
    icon: TodoIcon
  }
];
