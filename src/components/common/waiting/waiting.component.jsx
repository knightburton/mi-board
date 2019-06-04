import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';

import styles from './waiting.styles';

class Waiting extends React.PureComponent {
  render() {
    const { screen, open, label, classes } = this.props;

    return screen ? (
      <Grid
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        alignContent="center"
        className={classes.grid}
        container
      >
        <Grid item>
          <CircularProgress size={24} className={classes.spinner} />
          <Typography variant="h5" className={classes.text}>
            {label}
          </Typography>
        </Grid>
      </Grid>
    ) : (
      <Dialog
        open={open}
        PaperProps={{ className: classes.dialog }}
        disableBackdropClick
        disableEscapeKeyDown
      >
        <CircularProgress size={24} className={classes.spinner} />
        <Typography variant="h5" className={classes.text}>
          {label}
        </Typography>
      </Dialog>
    );
  }
}

Waiting.propTypes = {
  screen: PropTypes.bool,
  open: PropTypes.bool,
  label: PropTypes.string
};

Waiting.defaultProps = {
  screen: false,
  open: true,
  label: 'Loading...'
};

export default withStyles(styles)(Waiting);
