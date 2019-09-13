import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  lapText: {
    ...theme.typography.body1,
  },
  lapIndex: {
    display: 'inline-block',
    minWidth: theme.spacing(4),
  },
}));
