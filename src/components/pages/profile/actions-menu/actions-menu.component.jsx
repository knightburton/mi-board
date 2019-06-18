import React, { Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteIcon from '@material-ui/icons/DeleteOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/SendOutlined';
import PasswordIcon from '@material-ui/icons/VpnKeyOutlined';

export default class ActionsMenu extends React.PureComponent {
  state = {
    actionsMenu: null
  };

  handleActionMenuOpen = target => this.setState({ actionsMenu: target });

  handleActionMenuClose = () => this.setState({ actionsMenu: null });

  render() {
    const { actionsMenu } = this.state;

    return (
      <Fragment>
        <IconButton
          aria-label="Actions"
          aria-controls="actions-menu"
          aria-haspopup="true"
          onClick={e => this.handleActionMenuOpen(e.currentTarget)}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="actions-menu"
          anchorEl={actionsMenu}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          open={Boolean(actionsMenu)}
          onClose={() => this.handleActionMenuClose()}
        >
          <MenuItem onClick={() => this.handleActionMenuClose()}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send Email verification" />
          </MenuItem>
          <MenuItem onClick={() => this.handleActionMenuClose()}>
            <ListItemIcon>
              <PasswordIcon />
            </ListItemIcon>
            <ListItemText primary="Send Password Reset Email" />
          </MenuItem>
          <MenuItem onClick={() => this.handleActionMenuClose()}>
            <ListItemIcon>
              <DeleteIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Delete Profile" primaryTypographyProps={{ color: 'error' }} />
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
}
