import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../common/form/form.container';
import Section from '../../common/section/section.container';

import controls from './interval.constants';

export default class Interval extends React.PureComponent {
  render() {
    return (
      <Container maxWidth="md">

        <Section>
          <Typography variant="body1">
            A digital circuit that is used to determine the time interval between an initial trigger pulse
            and subsequent logic states that appear after a predetermined delay.
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
