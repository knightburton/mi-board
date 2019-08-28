import { makeStyles } from '@material-ui/core/styles';
import { DRAWER_WIDTH } from './drawer.constants';

export default makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH
    },
    width: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
  },
  drawerClose: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: theme.spacing(9) + 1
    }
  },
  avatar: {
    margin: theme.spacing(0, 2, 0, 0.5)
  },
  toolbar: {
    padding: theme.spacing(0, 1.5),
    ...theme.mixins.toolbar
  },
  list: {
    padding: theme.spacing(3, 0)
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: theme.spacing(2)
  },
  listItemIcon: {
    paddingLeft: theme.spacing(1)
  },
  listItemText: {
    fontWeight: 'bold'
  },
  toggleToolbar: {
    padding: 0,
    ...theme.mixins.toolbar
  },
  toggleButton: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 2),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  selected: {
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    },
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      color: theme.palette.primary.main
    }
  }
}));
