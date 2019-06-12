export default theme => ({
  paper: {
    position: 'relative',
    padding: theme.spacing(3, 2)
  },
  marginTop: {
    marginTop: theme.spacing(3)
  },
  marginBottom: {
    marginBottom: theme.spacing(3)
  },
  footer: {
    paddingTop: theme.spacing(3)
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
  action: {
    margin: theme.spacing(0, 1),
    '&:first-child': {
      marginLeft: 0
    },
    '&:last-child': {
      marginRight: 0
    },
    '&:only-child': {
      margin: 0
    }
  },
  actionIcon: {
    marginLeft: theme.spacing(1)
  }
});
