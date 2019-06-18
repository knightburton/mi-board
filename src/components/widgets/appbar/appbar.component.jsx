import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
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
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Avatar from '../../commons/avatar/avatar.container';

import styles from './appbar.styles';

class AppBar extends React.PureComponent {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    toggleMobileDrawer: PropTypes.func.isRequired,
    profileDisplayName: PropTypes.string
  };

  static defaultProps = {
    profileDisplayName: null
  };

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
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={() => this.handleAccountMenuClose()}
      >
        <MenuItem component={Link} to="/profile" onClick={() => this.handleAccountMenuClose()}>
          <ListItemIcon>
            <PersonOutlineIcon />
          </ListItemIcon>
          <Typography variant="inherit">Profile</Typography>
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
    const { toggleMobileDrawer, profileDisplayName, classes } = this.props;
    const { accountMenu } = this.state;

    return (
      <MuiAppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
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
          {profileDisplayName && (
            <Typography variant="body2" className={classes.profileName}>{profileDisplayName}</Typography>
          )}
          <IconButton
            edge="end"
            aria-owns={accountMenu ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={e => this.handleAccountMenuOpen(e.currentTarget)}
            color="inherit"
          >
            <Avatar size="extraSmall" />
          </IconButton>
          {this.renderAccountMenu()}
        </Toolbar>
      </MuiAppBar>
    );
  }
}

export default withRouter(withStyles(styles)(AppBar));
