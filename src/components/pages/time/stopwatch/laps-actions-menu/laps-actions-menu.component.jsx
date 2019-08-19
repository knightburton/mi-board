import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreVertIcon from '@material-ui/icons/MoreVert';
// import ShowAllIcon from '@material-ui/icons/FormatListNumberedOutlined';
import ClearAllIcon from '@material-ui/icons/ClearAllOutlined';

const LapsActionsMenu = ({ clearStopwatchLaps }) => {
  const [menu, toggleMenu] = React.useState(null);

  const handleClearAll = () => {
    toggleMenu(null);
    clearStopwatchLaps();
  };

  return (
    <Fragment>
      <IconButton
        aria-label="Actions"
        aria-controls="laps-actions-menu"
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
        <MenuItem onClick={() => handleClearAll()}>
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText primary="Clear all laps" />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

LapsActionsMenu.propTypes = {
  clearStopwatchLaps: PropTypes.func.isRequired
};

export default LapsActionsMenu;
