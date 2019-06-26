import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';

import styles from './wrapper.styles';

const useStyles = makeStyles(styles);

const Wrapper = ({ isDrawerOpened, children }) => {
  const classes = useStyles();
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
};

Wrapper.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Wrapper;
