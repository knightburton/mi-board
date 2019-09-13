import React, { useState } from 'react';
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

import Confirmation from '../../../widgets/confirmation/confirmation.component';

import { ProfileConsumer } from '../../../contexts/profile';

const ActionsMenu = ({ sendEmailVerification, sendPasswordResetEmail, deleteProfile }) => {
  const [menu, toggleMenu] = useState(null);

  const handleSendEmailVerification = () => {
    toggleMenu(null);
    sendEmailVerification();
  };

  const handleSendPasswordResetEmail = () => {
    toggleMenu(null);
    sendPasswordResetEmail();
  };

  const handleDeleteProfile = show => {
    toggleMenu(null);
    show();
  };

  return (
    <>
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
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={Boolean(menu)}
        onClose={() => toggleMenu(null)}
      >
        <ProfileConsumer>
          {({ emailVerified }) => (
            <MenuItem onClick={handleSendEmailVerification} disabled={emailVerified}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Send Email verification" />
            </MenuItem>
          )}
        </ProfileConsumer>
        <MenuItem onClick={handleSendPasswordResetEmail}>
          <ListItemIcon>
            <PasswordIcon />
          </ListItemIcon>
          <ListItemText primary="Send Password Reset Email" />
        </MenuItem>
        <Confirmation
          id="delete-profile-button"
          title="Delete profile?"
          description="Your profile and all of your data will be deleted. After this you cannot login into the application."
          onAgree={() => deleteProfile()}
          toggle={show => (
            <MenuItem onClick={() => handleDeleteProfile(show)}>
              <ListItemIcon>
                <DeleteIcon color="error" />
              </ListItemIcon>
              <ListItemText primary="Delete Profile" primaryTypographyProps={{ color: 'error' }} />
            </MenuItem>
          )}
        />
      </Menu>
    </>
  );
};

ActionsMenu.propTypes = {
  sendEmailVerification: PropTypes.func.isRequired,
  sendPasswordResetEmail: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

export default ActionsMenu;
