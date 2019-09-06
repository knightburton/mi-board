import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from '../../../constants';

export default makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    paddingBottom: theme.spacing(6)
  },
  contentFull: {
    marginLeft: 0
  },
  contentCollapse: {
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentExpand: {
    marginLeft: theme.spacing(9) + 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
}));
