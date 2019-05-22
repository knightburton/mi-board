import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(3, 2)
  },
  subtitle: {
    paddingTop: theme.spacing(3)
  }
});

class Interval extends React.PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="md" className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="body1">
            A digital circuit that is used to determine the time interval between an initial trigger pulse
            and subsequent logic states that appear after a predetermined delay.
          </Typography>
        </Paper>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Settings
        </Typography>
      </Container>
    );
  }
}

export default withStyles(styles)(Interval);
