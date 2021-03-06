import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../../commons/form/form.component';
import Section from '../../../commons/section/section.container';

import controls from './countdown.constants';

const Countdown = () => (
  <Container maxWidth="md">

    <Section>
      <Typography variant="body1">
        A countdown timer is a virtual clock on a landing page that counts down from a certain number
        or date to indicate the beginning or end of an event or offer.
      </Typography>
    </Section>

    <Section title="Settings" gutterBottom>
      <Form
        controls={controls}
        submitFunction={() => {}}
        submitButton={(
          <Button type="submit" variant="contained" size="small" color="primary">
            Start
            <PlayIcon />
          </Button>
        )}
        secondaryButton={(
          <Button type="submit" variant="contained" size="small" color="secondary">
            Reset
            <SetBackIcon />
          </Button>
        )}
        buttonPosition="center"
      />
    </Section>

  </Container>
);

export default Countdown;
