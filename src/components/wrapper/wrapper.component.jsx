import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import styles from './wrapper.styles';

class Wrapper extends React.PureComponent {
  static propTypes = {
    isDrawerOpened: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  };

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

export default withStyles(styles)(Wrapper);
