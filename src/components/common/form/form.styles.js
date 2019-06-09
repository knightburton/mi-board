export default theme => ({
  form: {
    position: 'relative',
    padding: 0,
    textAlign: 'center'
  },
  single: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  singleValue: {
    padding: theme.spacing(0, 1.5),
    marginBottom: theme.spacing(4.5)
  },
  singleLabel: {
    marginBottom: theme.spacing(0.5)
  }
});
