export default theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1)
  },
  tab: {
    minWidth: '80px',
    padding: theme.spacing(1, 2),
    textTransform: 'none'
  },
  indicator: {
    height: '4px',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white
  }
});
