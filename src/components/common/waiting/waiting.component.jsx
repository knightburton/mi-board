import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';

const styles = theme => ({
  grid: {
    minHeight: '100vh'
  },
  text: {
    marginLeft: theme.spacing(4),
    fontWeight: '300'
  },
  spinner: {
    position: 'absolute',
    marginTop: theme.spacing(.3)
  },
  dialog: {
    padding: theme.spacing(3, 6)
  }
});

class Waiting extends React.PureComponent {
  render() {
    const { screen, open, label, classes } = this.props;

    return screen ? (
      <Grid spacing={0} direction="column" alignItems="center" justify="center" alignContent="center" className={classes.grid} container>
        <Grid item>
          <CircularProgress size={24} className={classes.spinner} />
          <Typography variant="h5" className={classes.text}>
            {label}
          </Typography>
        </Grid>
      </Grid>
    ) : (
      <Dialog open={open} PaperProps={{ className: classes.dialog }} disableBackdropClick disableEscapeKeyDown>
        <CircularProgress size={24} className={classes.spinner} />
        <Typography variant="h5" className={classes.text}>
          {label}
        </Typography>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Waiting);
