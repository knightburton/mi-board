import React, { Fragment } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import WatchLaterIcon from '@material-ui/icons/WatchLaterOutlined';

import ProjectTitle from '../common/project-title/project-title.component';

import { DRAWER_WIDTH } from '../../constants';

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH
    },
    width: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    [theme.breakpoints.up('sm')]: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(9) + 1
    }
  },
  avatar: {
    margin: theme.spacing(0, 2, 0, .5)
  },
  toolbar: {
    padding: theme.spacing(0, 1.5),
    ...theme.mixins.toolbar
  },
  listItemIcon: {
    paddingLeft: theme.spacing(1)
  },
  toggleToolbar: {
    padding: 0,
    ...theme.mixins.toolbar,
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
  }
});

class Drawer extends React.PureComponent {
  renderDrawerContent = (toggleDrawer, isMobile = false) => {
    const { classes, isDrawerOpened } = this.props;

    return (
      <Fragment>
        <Toolbar className={classes.toolbar}>
          <Avatar className={classes.avatar}>MI</Avatar>
          <ProjectTitle />
        </Toolbar>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className={classes.listItemIcon}>
              <WatchLaterIcon />
            </ListItemIcon>
            <ListItemText primary="Time" />
          </ListItem>
        </List>
        <Divider />
        <Hidden xsDown>
          <Toolbar className={classes.toggleToolbar}>
            <div
              onClick={() => toggleDrawer()}
              className={classes.toggleButton}
              aria-label="expand or collapse navigation bar"
            >
              {!isMobile && isDrawerOpened
                ? <ChevronLeftIcon />
                : <ChevronRightIcon />
              }
            </div>
          </Toolbar>
        </Hidden>
      </Fragment>
    );
  };

  render() {
    const {
      isDrawerOpened,
      isMobileDrawerOpened,
      toggleDrawer,
      toggleMobileDrawer,
      classes
    } = this.props;

    return (
      <Fragment>
        <Hidden xsDown>
          <MuiDrawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: isDrawerOpened,
              [classes.drawerClose]: !isDrawerOpened,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: isDrawerOpened,
                [classes.drawerClose]: !isDrawerOpened,
              }),
            }}
            open={isDrawerOpened}
          >
            {this.renderDrawerContent(toggleDrawer)}
          </MuiDrawer>
        </Hidden>
        <Hidden smUp>
          <MuiDrawer
            variant="temporary"
            className={clsx(classes.drawer, classes.drawerOpen)}
            classes={{
              paper: classes.drawerOpen,
            }}
            open={isMobileDrawerOpened}
            onClose={() => toggleMobileDrawer()}
            ModalProps={{
              keepMounted: true
            }}
          >
            {this.renderDrawerContent(toggleMobileDrawer, true)}
          </MuiDrawer>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Drawer);
