export default theme => ({
  form: {
    position: 'relative',
    padding: 0,
    textAlign: 'center'
  },
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  buttonWrapper: {
    margin: theme.spacing(1, 1.5, 0, 1.5)
  },
  floated: {
    position: 'absolute',
    width: `calc(100% - ${theme.spacing(3)}px)`
  },
  small: {
    bottom: -theme.spacing(5)
  },
  medium: {
    bottom: -theme.spacing(5)
  },
  large: {
    bottom: -theme.spacing(5.5)
  },
  secondaryButton: {
    marginRight: theme.spacing(2)
  },
  buttonIcon: {
    marginLeft: theme.spacing(1)
  }
});
