import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/Check';

import Form from '../../../../commons/form/form.component';
import Section from '../../../../commons/section/section.component';
import SectionSelect from '../../../../commons/section-select/section-select.component';

import { controls, options, optionsMap } from '../interval.constants';

export default class IntervalForm extends React.PureComponent {
  static propTypes = {
    setIntervalParams: PropTypes.func.isRequired,
    setVisibleTimer: PropTypes.func.isRequired
  };

  state = {
    formControls: controls
  };

  componentWillMount() {
    this.setState({ formControls: this.changeFormValuesTo('zero') });
  }

  changeFormValuesTo = key => controls.map(control => ({
    ...control,
    defaultValue: options[key].data[control.key]
  }));

  handleSectionSelect = key => this.setState({ formControls: this.changeFormValuesTo(key) });

  handleFormSubmit = data => {
    const { setIntervalParams, setVisibleTimer } = this.props;

    setIntervalParams(data);
    setVisibleTimer('interval');
  };

  render() {
    const { formControls } = this.state;

    return (
      <Fragment>

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
          onSelect={key => this.handleSectionSelect(key)}
          breakpoints={{ xs: 12, sm: 6 }}
        />

        <Section title="Settings" gutterBottom>
          <Form
            controls={formControls}
            submitIcon={CheckIcon}
            submitLabel="Set"
            submitFunction={data => this.handleFormSubmit(data)}
            buttonPosition="right"
            buttonSize="small"
            allowControlsChange
          />
        </Section>

      </Fragment>
    );
  }
}
