import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Hidden from '@material-ui/core/Hidden';

import useStyles from './wrapper.styles';

const Wrapper = ({ isDrawerOpened, children }) => {
  const classes = useStyles();
  const smallClasses = clsx(classes.content, {
    [classes.contentCollapse]: isDrawerOpened,
    [classes.contentExpand]: !isDrawerOpened,
  });
  const mediumClasses = clsx(classes.content, classes.contentFull);

  return (
    <>
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
    </>
  );
};

Wrapper.propTypes = {
  isDrawerOpened: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
