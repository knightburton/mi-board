import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import MuiDrawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { DRAWER_WIDTH } from '../../constants';

const styles = theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class Drawer extends React.PureComponent {
  render() {
    const { isDrawerOpened, toggleDrawer, classes } = this.props;

    return (
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
        <div className={classes.toolbar}>
          <IconButton onClick={() => toggleDrawer()}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
      </MuiDrawer>
    );
  }
}

export default withStyles(styles)(Drawer);
