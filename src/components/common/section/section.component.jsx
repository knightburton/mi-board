import React, { Fragment } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './section.styles';

class Section extends React.PureComponent {
  render() {
    const { title, gutterBottom, children, classes } = this.props;

    return (
      <Fragment>
        {title &&
          <Typography variant="subtitle1" className={clsx({ [classes.marginTop]: !!title })}>
            {title}
          </Typography>
        }
        <Paper
          className={clsx(
            {
              [classes.marginTop]: !title,
              [classes.marginBottom]: gutterBottom
            },
            classes.paper
          )}
        >
          {children}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Section);
