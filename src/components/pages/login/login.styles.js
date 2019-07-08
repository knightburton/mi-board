export default theme => ({
  container: {
    height: '100vh'
  },
  grid: {
    height: '100vh'
  },
  avatarWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1)
  },
  progressCircle: {
    position: 'absolute',
    top: theme.spacing(0.25),
    alignSelf: 'center',
    color: theme.palette.primary.main,
    zIndex: 1
  },
  error: {
    fontWight: 'bold',
    margin: theme.spacing(2, 0)
  }
});
