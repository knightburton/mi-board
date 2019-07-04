import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteIcon from '@material-ui/icons/DeleteOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SendIcon from '@material-ui/icons/SendOutlined';
import PasswordIcon from '@material-ui/icons/VpnKeyOutlined';

const ActionsMenu = props => {
  const { emailVerified, sendEmailVerification, sendPasswordResetEmail } = props;
  const [menu, toggleMenu] = React.useState(null);

  const handleSendEmailVerification = () => {
    toggleMenu(null);
    sendEmailVerification();
  };

  const handleSendPasswordResetEmail = () => {
    toggleMenu(null);
    sendPasswordResetEmail();
  };

  return (
    <Fragment>
      <IconButton
        aria-label="Actions"
        aria-controls="actions-menu"
        aria-haspopup="true"
        onClick={e => toggleMenu(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="actions-menu"
        anchorEl={menu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        open={Boolean(menu)}
        onClose={() => toggleMenu(null)}
      >
        <MenuItem onClick={() => handleSendEmailVerification()} disabled={emailVerified}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send Email verification" />
        </MenuItem>
        <MenuItem onClick={() => handleSendPasswordResetEmail()}>
          <ListItemIcon>
            <PasswordIcon />
          </ListItemIcon>
          <ListItemText primary="Send Password Reset Email" />
        </MenuItem>
        <MenuItem onClick={() => toggleMenu(null)}>
          <ListItemIcon>
            <DeleteIcon color="error" />
          </ListItemIcon>
          <ListItemText primary="Delete Profile" primaryTypographyProps={{ color: 'error' }} />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

ActionsMenu.propTypes = {
  emailVerified: PropTypes.bool.isRequired,
  sendEmailVerification: PropTypes.func.isRequired,
  sendPasswordResetEmail: PropTypes.func.isRequired
};

export default ActionsMenu;
