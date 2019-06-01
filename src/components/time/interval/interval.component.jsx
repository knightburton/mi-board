import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../common/form/form.container';
import Section from '../../common/section/section.container';

import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../common/form/form.constants';

export default class Interval extends React.PureComponent {
  render() {
    const controls = [
      {
        key: 'repeat',
        type: CONTROL_TYPES.NUMBER,
        defaultValue: '',
        label: 'Number of Sets',
        required: true,
        helperText: 'How many times do you want to repeat the process'
      },
      {
        key: 'warmup',
        type: CONTROL_TYPES.NUMBER,
        defaultValue: '',
        label: 'Warmup Duration',
        required: false,
        helperText: 'How long do you want to prepare to start (in seconds)'
      },
      {
        key: 'high',
        type: CONTROL_TYPES.NUMBER,
        defaultValue: '',
        label: 'High Intensity Duration',
        required: true,
        helperText: 'How long do you want to last the high intensity (in seconds)'
      },
      {
        key: 'low',
        type: CONTROL_TYPES.NUMBER,
        defaultValue: '',
        label: 'Low Intensity Duration',
        required: true,
        helperText: 'How long do you want to last the low intensity (in seconds)'
      },
      {
        key: 'cooldown',
        type: CONTROL_TYPES.NUMBER,
        defaultValue: '',
        label: 'Cooldown Duration',
        required: false,
        helperText: 'How long do you want to rest at the end (in seconds)'
      }
    ].map(control => ({
      ...control,
      max: 3600,
      validators: [ VALIDATORS.NUMBER_BETWEEN(0, 3600) ],
      errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 3600) ]
    }));

    return (
      <Container maxWidth="md">

        <Section>
          <Typography variant="body1">
            A digital circuit that is used to determine the time interval between an initial trigger pulse
            and subsequent logic states that appear after a predetermined delay.
          </Typography>
        </Section>

        <Section title="Settings">
          <Form
            controls={controls}
            submitIcon={PlayIcon}
            submitLabel="Start"
            submitFunction={() => {}}
            secondaryColor="secondary"
            secondaryIcon={SetBackIcon}
            secondaryLabel="Reset"
            secondaryFunction={() => {}}
            buttonPosition="right"
            buttonSize="small"
            buttonFloated
          />
        </Section>

      </Container>
    );
  }
}
