import { fade } from '@material-ui/core/styles/colorManipulator';

export default theme => ({
  // General control styles
  formControl: {
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0, 1.5)
  },
  inline: {
    [theme.breakpoints.up('sm')]: {
      width: '50%'
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
  slider: {
    padding: theme.spacing(3, 1)
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
  thumbText: {
    ...theme.typography.caption,
    paddingTop: '1px',
    paddingLeft: '1px'
  },

  // Slider Thumb styles
  thumb: {
    height: theme.spacing(3),
    width: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    '&$focused, &:hover': {
      boxShadow: `0 0 0 ${theme.spacing(0.5)}px ${fade(theme.palette.primary.main, 0.16)}`,
    },
    '&$activated': {
      boxShadow: `0 0 0 ${theme.spacing(1)}px ${fade(theme.palette.primary.main, 0.16)}`,
    },
    '&$jumped': {
      boxShadow: `0 0 0 ${theme.spacing(1)}px ${fade(theme.palette.primary.main, 0.16)}`,
    },
  },
  focused: {},
  activated: {},
  jumped: {},

  // Date Picker styles
  datePicker: {
    '& > label:first-of-type': {
      marginLeft: theme.spacing(1.5)
    }
  }
});
