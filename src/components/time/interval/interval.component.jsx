import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../common/form/form.container';
import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../common/form/form.constants';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(3)
  },
  paper: {
    position: 'relative',
    padding: theme.spacing(3, 2)
  },
  subtitle: {
    paddingTop: theme.spacing(3)
  },
  submitButton: {
    position: 'absolute',
    bottom: -theme.spacing(5.5),
    right: 0
  },
  secondaryButton: {
    position: 'absolute',
    bottom: -theme.spacing(2.5),
    right: theme.spacing(8.5)
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
        <Paper className={classes.paper}>
          <Form
            controls={[
              {
                key: 'repeat',
                type: CONTROL_TYPES.NUMBER,
                defaultValue: '',
                label: 'Number of Sets',
                required: true,
                max: 3600,
                helperText: 'How many times do you want to repeat the process',
                validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
                errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
              },
              {
                key: 'warmup',
                type: CONTROL_TYPES.NUMBER,
                defaultValue: '',
                label: 'Warmup Duration',
                required: false,
                max: 3600,
                helperText: 'How long do you want to prepare to start (in seconds)',
                validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
                errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
              },
              {
                key: 'high',
                type: CONTROL_TYPES.NUMBER,
                defaultValue: '',
                label: 'High Intensity Duration',
                required: true,
                max: 3600,
                helperText: 'How long do you want to last the high intensity (in seconds)',
                validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
                errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
              },
              {
                key: 'low',
                type: CONTROL_TYPES.NUMBER,
                defaultValue: '',
                label: 'Low Intensity Duration',
                required: true,
                max: 3600,
                helperText: 'How long do you want to last the low intensity (in seconds)',
                validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
                errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
              },
              {
                key: 'cooldown',
                type: CONTROL_TYPES.NUMBER,
                defaultValue: '',
                label: 'Cooldown Duration',
                required: false,
                max: 3600,
                helperText: 'How long do you want to rest at the end (in seconds)',
                validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
                errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
              }
            ]}
            submitFunction={() => {}}
            submitSize="small"
            submitFloatingClasses={classes.submitButton}
            submitFloatingIcon={PlayIcon}
            submitFloating
          />
          <Fab
            color="default"
            size="small"
            className={classes.secondaryButton}
          >
            <SetBackIcon />
          </Fab>
        </Paper>
      </Container>
    );
  }
}

export default withStyles(styles)(Interval);
