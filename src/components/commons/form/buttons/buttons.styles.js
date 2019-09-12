import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  buttonWrapper: {
    margin: theme.spacing(3, 1.5, 0, 1.5),
    '& button:nth-child(2)': {
      marginLeft: theme.spacing(2),
    },
  },
  floated: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(3)}px)`,
    bottom: -theme.spacing(5),
  },
  single: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: theme.spacing(0.5),
  },
}));
