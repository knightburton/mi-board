import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    color: theme.palette.secondary.main,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.primary.light,
  },
  tab: {
    minWidth: theme.spacing(6),
    padding: 0,
    textTransform: 'none',
    '&:not(:last-child)': {
      marginRight: theme.spacing(2),
    },
    '&:not(:first-child)': {
      marginLeft: theme.spacing(2),
    },
  },
  selected: {
    color: theme.palette.primary.main,
    padding: 0,
  },
  indicator: {
    height: '4px',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
  },
}));
