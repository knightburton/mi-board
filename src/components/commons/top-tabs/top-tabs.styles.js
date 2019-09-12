import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.light,
  },
  tab: {
    minWidth: '80px',
    padding: theme.spacing(1, 2),
    textTransform: 'none',
  },
  selected: {
    color: theme.palette.primary.main,
  },
  indicator: {
    height: '4px',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
  },
}));
