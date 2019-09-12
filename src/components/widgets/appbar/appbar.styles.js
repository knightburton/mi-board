import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  profileName: {
    marginRight: theme.spacing(0.5),
  }
}));
