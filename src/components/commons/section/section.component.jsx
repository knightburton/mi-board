import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Waiting from '../../widgets/waiting/waiting.component';

import styles from './section.styles';

class Section extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    gutterBottom: PropTypes.bool,
    children: PropTypes.node.isRequired,
    waitingKey: PropTypes.string,
    isWaiting: PropTypes.bool
  };

  static defaultProps = {
    title: '',
    gutterBottom: false,
    waitingKey: '',
    isWaiting: false
  };

  render() {
    const { title, gutterBottom, children, waitingKey, isWaiting, classes } = this.props;
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
          {waitingKey && isWaiting && <Waiting progressbar />}
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Section);
