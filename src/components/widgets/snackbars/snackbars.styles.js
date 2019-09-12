import { makeStyles } from '@material-ui/core/styles';
import { amber, green, lightBlue } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  box: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 500,
    },
  },
  snackbar: {
    position: 'relative',
    padding: theme.spacing(0, 1),
    right: 0,
    left: 0,
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  snackbarContent: {
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
    },
  },
  button: {
    position: 'absolute',
    top: -theme.spacing(7),
    right: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      top: -theme.spacing(5),
    },
  },
  success: {
    backgroundColor: green[500],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: lightBlue[400],
  },
  warning: {
    backgroundColor: amber[800],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(0.5),
  },
}));
