import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './section.styles';

class Section extends React.PureComponent {
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
          <Typography variant="subtitle1" className={clsx({ [classes.marginTop]: !!title })}>
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

Section.propTypes = {
  title: PropTypes.string,
  gutterBottom: PropTypes.bool,
  children: PropTypes.node.isRequired
};

Section.defaultProps = {
  title: '',
  gutterBottom: false
};

export default withStyles(styles)(Section);
