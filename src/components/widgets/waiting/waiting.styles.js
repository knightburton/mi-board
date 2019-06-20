export default theme => ({
  screen: {
    minHeight: '100vh'
  },
  text: {
    marginLeft: theme.spacing(6),
    fontWeight: '300'
  },
  spinner: {
    position: 'absolute',
    marginTop: theme.spacing(0.3)
  },
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.action.hover
  },
  progressbar: {
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius
  },
  dialog: {
    padding: theme.spacing(3, 6)
  }
});
