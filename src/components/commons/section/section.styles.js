import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  paper: {
    position: 'relative',
    padding: theme.spacing(3, 2)
  },
  marginTop: {
    marginTop: theme.spacing(3)
  },
  marginBottom: {
    marginBottom: theme.spacing(3)
  },
  waiting: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.action.disabled,
    borderRadius: theme.shape.borderRadius
  }
}));
