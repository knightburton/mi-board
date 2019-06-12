import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../common/form/form.component';
import Section from '../../common/section/section.component';

import controls from './countdown.constants';

export default class Countdown extends React.PureComponent {
  render() {
    return (
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
