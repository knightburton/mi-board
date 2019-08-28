import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withRouter, Link } from 'react-router-dom';

import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ProjectTitle from '../../commons/project-title/project-title.component';

import Logo from '../../../assets/images/icon.png';

import { DRAWER_MENU } from './drawer.constants';

import useStyles from './drawer.styles';

const DrawerContent = ({ mobileView, pathname, toggleDrawer, toggleMobileDrawer, isDrawerOpened, isMobileDrawerOpened }) => {
  const classes = useStyles();
  const isMenuItemSelected = ({ to, exact }) => (exact ? to === pathname : pathname.includes(to));
  const handleMenuItemClick = () => {
    if (isMobileDrawerOpened) toggleMobileDrawer();
  };

  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Link to="/dashboard">
          <Avatar className={classes.avatar} src={Logo} imgProps={{ draggable: false }} alt="Project Logo" />
        </Link>
        <Link to="/dashboard" className={classes.link}>
          <ProjectTitle />
        </Link>
      </Toolbar>
      <Divider />
      <MenuList className={classes.list}>
        {DRAWER_MENU.map(item => (
          <MenuItem
            key={item.key}
            component={Link}
            to={item.to}
            selected={isMenuItemSelected(item)}
            onClick={handleMenuItemClick}
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
      <Hidden smDown>
        <Toolbar className={classes.toggleToolbar}>
          <Box
            onClick={toggleDrawer}
            className={classes.toggleButton}
            aria-label="expand or collapse navigation bar"
          >
            {!mobileView && isDrawerOpened
              ? <ChevronLeftIcon />
              : <ChevronRightIcon />
            }
          </Box>
        </Toolbar>
      </Hidden>
    </Fragment>
  );
};

DrawerContent.propTypes = {
  mobileView: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
  isDrawerOpened: PropTypes.bool.isRequired,
  isMobileDrawerOpened: PropTypes.bool.isRequired
};

DrawerContent.defaultProps = {
  mobileView: false
};

const Drawer = ({ location: { pathname }, ...rest }) => {
  const classes = useStyles();
  const { isMobileDrawerOpened, toggleMobileDrawer, isDrawerOpened } = rest;

  return (
    <Fragment>
      <Hidden smDown>
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
          <DrawerContent pathname={pathname} {...rest} />
        </MuiDrawer>
      </Hidden>
      <Hidden mdUp>
        <MuiDrawer
          variant="temporary"
          className={clsx(classes.drawer, classes.drawerOpen)}
          classes={{
            paper: classes.drawerOpen,
          }}
          open={isMobileDrawerOpened}
          onClose={toggleMobileDrawer}
          ModalProps={{
            keepMounted: true
          }}
        >
          <DrawerContent mobileView pathname={pathname} {...rest} />
        </MuiDrawer>
      </Hidden>
    </Fragment>
  );
};

Drawer.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  isMobileDrawerOpened: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Drawer);
