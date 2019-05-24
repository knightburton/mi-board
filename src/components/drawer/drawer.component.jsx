import React, { Fragment } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { withRouter, Link } from 'react-router-dom';

import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ProjectTitle from '../common/project-title/project-title.component';

import Logo from '../../assets/images/icon.png';

import { DRAWER_WIDTH, DRAWER_MENU } from './drawer.constants';

const styles = theme => ({
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
    margin: theme.spacing(0, 2, 0, .5)
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
});

class Drawer extends React.PureComponent {
  getIsMenuItemSelected = ({ to, exact }) => {
    const { location: { pathname } } = this.props;

    return exact ? to === pathname : pathname.includes(to)
  };

  renderDrawerContent = (toggleDrawer, isMobile = false) => {
    const { classes, isDrawerOpened, isMobileDrawerOpened, toggleMobileDrawer } = this.props;

    return (
      <Fragment>
        <Toolbar className={classes.toolbar}>
          <Avatar className={classes.avatar} src={Logo} alt="Project Logo" />
          <ProjectTitle />
        </Toolbar>
        <Divider />
        <MenuList className={classes.list}>
          {DRAWER_MENU.map(item => (
            <MenuItem
              key={item.key}
              component={Link}
              to={item.to}
              selected={this.getIsMenuItemSelected(item)}
              onClick={() => isMobileDrawerOpened ? toggleMobileDrawer() : null}
              classes={{ selected: classes.selected }}
              className={classes.listItem}
              disableRipple
            >
              <ListItemIcon className={classes.listItemIcon}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} classes={{ primary: classes.listItemText }} />
            </MenuItem>
          ))}
        </MenuList>
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

export default withRouter(withStyles(styles)(Drawer));
