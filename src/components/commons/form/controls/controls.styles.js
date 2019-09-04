import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  // General control styles
  formControl: {
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0, 1.5)
  },
  inline: {
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  inputLabel: {
    marginLeft: theme.spacing(1.5)
  },

  // Slider control styles
  sliderControl: {
    display: 'inline-flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
    padding: theme.spacing(0, 1.5),
  },
  sliderFullWidth: {
    width: '100%'
  },
  sliderLabel: {
    width: '100%',
    textAlign: 'left',
    color: theme.palette.action.active
  },
  sliderContent: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'stretch'
  },
  sliderButton: {
    '&:first-child': {
      marginRight: theme.spacing(1),
      marginLeft: -theme.spacing(1.5)
    },
    '&:last-child': {
      marginLeft: theme.spacing(1),
      marginRight: -theme.spacing(1.5)
    }
  },

  // Date Picker styles
  datePicker: {
    '& > label:first-of-type': {
      marginLeft: theme.spacing(1.5)
    }
  },

  // Select styles
  select: {
    textAlign: 'left'
  }
}));
