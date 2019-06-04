import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import { DRAWER_WIDTH } from '../drawer/drawer.constants';

const styles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  },
  contentFull: {
    marginLeft: 0
  },
  contentCollapse: {
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentExpand: {
    marginLeft: theme.spacing(9) + 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class Wrapper extends React.PureComponent {
  render() {
    const { isDrawerOpened, classes, children } = this.props;
    const smallClasses = clsx(classes.content, {
      [classes.contentCollapse]: isDrawerOpened,
      [classes.contentExpand]: !isDrawerOpened
    });
    const mediumClasses = clsx(classes.content, classes.contentFull);

    return (
      <Fragment>
        <Hidden smDown>
          <main className={smallClasses}>
            {children}
          </main>
        </Hidden>
        <Hidden mdUp>
          <main className={mediumClasses}>
            {children}
          </main>
        </Hidden>
      </Fragment>
    );
  }
}

Wrapper.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(Wrapper);
