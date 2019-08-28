import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';

import useStyles from './waiting.styles';

const ProgressbarWaiting = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <LinearProgress className={classes.progressbar} />
    </Box>
  );
};

const ScreenWaiting = ({ label }) => {
  const classes = useStyles();

  return (
    <Grid
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      alignContent="center"
      className={classes.screen}
      container
    >
      <Grid item>
        <CircularProgress size={24} className={classes.spinner} />
        <Typography variant="h5" className={classes.text}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

ScreenWaiting.propTypes = {
  label: PropTypes.string.isRequired
};

const AppWaiting = ({ label }) => {
  const classes = useStyles();

  return (
    <Dialog
      PaperProps={{ className: classes.dialog }}
      disableBackdropClick
      disableEscapeKeyDown
      open
    >
      <CircularProgress size={24} className={classes.spinner} />
      <Typography variant="h5" className={classes.text}>
        {label}
      </Typography>
    </Dialog>
  );
};

AppWaiting.propTypes = {
  label: PropTypes.string.isRequired
};

const Waiting = ({ app, screen, progressbar, label }) => {
  if (app) return <AppWaiting label={label} />;
  if (screen) return <ScreenWaiting label={label} />;
  if (progressbar) return <ProgressbarWaiting />;
  return null;
};

Waiting.propTypes = {
  app: PropTypes.bool,
  screen: PropTypes.bool,
  progressbar: PropTypes.bool,
  label: PropTypes.string
};

Waiting.defaultProps = {
  app: false,
  screen: false,
  progressbar: false,
  label: 'Loading...'
};

export default Waiting;
