import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './section.styles';

class Section extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    gutterBottom: PropTypes.bool,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    title: '',
    gutterBottom: false
  };

  render() {
    const { title, gutterBottom, children, classes } = this.props;
    const paperClassNames = clsx(
      {
        [classes.marginTop]: !title,
        [classes.marginBottom]: gutterBottom
      },
      classes.paper
    );

    return (
      <Fragment>
        {title && (
          <Typography variant="subtitle1" className={classes.marginTop}>
            {title}
          </Typography>
        )}
        <Paper className={paperClassNames}>
          {children}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Section);
