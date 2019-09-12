import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreIcon from '@material-ui/icons/UnfoldMoreOutlined';
import LessIcon from '@material-ui/icons/UnfoldLessOutlined';
import ClearAllIcon from '@material-ui/icons/ClearAllOutlined';

const LapsActionsMenu = ({ lapsLength, noOfVisibleLaps, changeNoOfVisibleLaps, clearStopwatchLaps }) => {
  const [menu, toggleMenu] = React.useState(null);

  const handleClearAll = () => {
    toggleMenu(null);
    clearStopwatchLaps();
  };

  const handleChangeNoOfVisibleLaps = () => {
    toggleMenu(null);
    if (noOfVisibleLaps === 10) changeNoOfVisibleLaps(lapsLength);
    else changeNoOfVisibleLaps(10);
  };

  return (
    <>
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
        <MenuItem onClick={handleChangeNoOfVisibleLaps} disabled={lapsLength < 10}>
          <ListItemIcon>
            {noOfVisibleLaps === 10 ? <MoreIcon /> : <LessIcon />}
          </ListItemIcon>
          <ListItemText primary={noOfVisibleLaps === 10 ? 'Show more' : 'Show less'} />
        </MenuItem>
        <MenuItem onClick={handleClearAll} disabled={lapsLength === 0}>
          <ListItemIcon>
            <ClearAllIcon />
          </ListItemIcon>
          <ListItemText primary="Clear all" />
        </MenuItem>
      </Menu>
    </>
  );
};

LapsActionsMenu.propTypes = {
  lapsLength: PropTypes.number.isRequired,
  noOfVisibleLaps: PropTypes.number.isRequired,
  changeNoOfVisibleLaps: PropTypes.func.isRequired,
  clearStopwatchLaps: PropTypes.func.isRequired,
};

export default LapsActionsMenu;
