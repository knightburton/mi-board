import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import MuiAppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Avatar from '../../commons/avatar/avatar.component';

import useStyles from './appbar.styles';

import { MENU } from '../../../constants';

const AppBar = ({ signOut, toggleMobileDrawer, profileDisplayName, location: { pathname } }) => {
  const classes = useStyles();
  const [accountMenu, setAccountMenu] = React.useState(null);
  const menuItem = MENU.find(item => pathname.includes(item.to));
  const title = (menuItem && menuItem.text) || (pathname.includes('/profile') && 'Profile') || 'MI - Board';

  const handleSignOutClick = () => {
    signOut();
    setAccountMenu(null);
  };

  return (
    <Container maxWidth={false}>
      <MuiAppBar position="sticky" className={classes.appBar}>
        <Toolbar disableGutters>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={toggleMobileDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h5">
            {title}
          </Typography>
          <div className={classes.grow} />
          {profileDisplayName && (
            <Typography variant="body2" className={classes.profileName}>
              {profileDisplayName}
            </Typography>
          )}
          <IconButton
            edge="end"
            aria-owns={accountMenu ? 'material-appbar' : undefined}
            aria-haspopup="true"
            onClick={e => setAccountMenu(e.currentTarget)}
            color="inherit"
          >
            <Avatar size="extraSmall" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={accountMenu}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(accountMenu)}
            onClose={() => setAccountMenu(null)}
          >
            <MenuItem component={Link} to="/profile" onClick={() => setAccountMenu(null)}>
              <ListItemIcon>
                <PersonOutlineIcon />
              </ListItemIcon>
              <Typography variant="inherit">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleSignOutClick}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <Typography variant="inherit">Sign Out</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </MuiAppBar>
    </Container>
  );
};

AppBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  signOut: PropTypes.func.isRequired,
  toggleMobileDrawer: PropTypes.func.isRequired,
  profileDisplayName: PropTypes.string,
};

AppBar.defaultProps = {
  profileDisplayName: null,
};

export default withRouter(AppBar);
