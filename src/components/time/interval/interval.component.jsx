import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PlayIcon from '@material-ui/icons/PlayArrowOutlined';
import SetBackIcon from '@material-ui/icons/SettingsBackupRestoreOutlined';

import Form from '../../common/form/form.component';
import Section from '../../common/section/section.component';
import SectionSelect from '../../common/section-select/section-select.component';

import { controls, optionsMap } from './interval.constants';

export default class Interval extends React.PureComponent {
  static propTypes = {
    setIntervalParams: PropTypes.func.isRequired
  };

  handleFormSubmit = data => {
    const { setIntervalParams } = this.props;

    setIntervalParams(data);
  };

  render() {
    return (
      <Container maxWidth="md">

        <Section>
          <Typography variant="body1">
            A digital circuit that is used to determine the time interval between an initial trigger pulse
            and subsequent logic states that appear after a predetermined delay.
          </Typography>
        </Section>

        <SectionSelect
          title="Presets"
          options={optionsMap}
          selectedByDefault="zero"
          onSelect={() => {}}
          breakpoints={{ xs: 12, sm: 6 }}
        />

        <Section title="Settings" gutterBottom>
          <Form
            controls={controls}
            submitIcon={PlayIcon}
            submitLabel="Start"
            submitFunction={data => this.handleFormSubmit(data)}
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
