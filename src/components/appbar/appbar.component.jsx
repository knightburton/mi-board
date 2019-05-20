import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import MuiAppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { DRAWER_WIDTH } from '../drawer/drawer.constants';

const styles = theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(9) + 1,
      width: `calc(100% - ${theme.spacing(9) + 1}px)`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  },
  appBarShift: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  },
  menuButton: {
    marginRight: 36,
  },
  grow: {
    flexGrow: 1
  }
});

class AppBar extends React.PureComponent {
  state = {
    accountMenu: null
  };

  handleAccountMenuOpen = anchor => this.setState({ accountMenu: anchor });

  handleAccountMenuClose = () => this.setState({ accountMenu: null });

  handleLogoutClick = () => {
    const { logout } = this.props;

    logout();
    this.handleAccountMenuClose();
  };

  renderAccountMenu = () => {
    const { accountMenu } = this.state;
    const open = Boolean(accountMenu);

    return (
      <Menu
        id="menu-appbar"
        anchorEl={accountMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => this.handleAccountMenuClose()}
      >
        <MenuItem onClick={() => this.handleAccountMenuClose()}>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <Typography variant="inherit">Details</Typography>
        </MenuItem>
        <MenuItem onClick={() => this.handleLogoutClick()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    );
  };

  render() {
    const { isDrawerOpened, toggleMobileDrawer, classes } = this.props;
    const { accountMenu } = this.state;

    const appBarClasses = clsx(classes.appBar, { [classes.appBarShift]: isDrawerOpened });

    return (
      <MuiAppBar position="sticky" className={appBarClasses}>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={() => toggleMobileDrawer()}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.grow} />
          <IconButton
            edge="end"
            aria-owns={accountMenu ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={e => this.handleAccountMenuOpen(e.currentTarget)}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          {this.renderAccountMenu()}
        </Toolbar>
      </MuiAppBar>
    );
  }
}

export default withRouter(withStyles(styles)(AppBar));
