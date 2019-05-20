import React, { Fragment } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import { DRAWER_WIDTH } from '../drawer/drawer.constants';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  contentLeaving: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentEntering: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  contentFull: {
    marginLeft: 0
  },
  contentCollapse: {
    marginLeft: DRAWER_WIDTH
  },
  contentExpand: {
    marginLeft: theme.spacing(9) + 1
  }
});

class Wrapper extends React.PureComponent {
  render() {
    const { isDrawerOpened, classes, children } = this.props;

    return (
      <Fragment>
        <Hidden xsDown>
          <main className={clsx(classes.content, {
            [classes.contentLeaving]: isDrawerOpened,
            [classes.contentEntering]: !isDrawerOpened,
            [classes.contentCollapse]: isDrawerOpened,
            [classes.contentExpand]: !isDrawerOpened
          })}>
            {children}
          </main>
        </Hidden>
        <Hidden smUp>
          <main className={clsx(classes.content, classes.contentFull)}>
            {children}
          </main>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Wrapper);
