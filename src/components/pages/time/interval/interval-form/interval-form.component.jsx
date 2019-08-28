import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CheckIcon from '@material-ui/icons/Check';

import Form from '../../../../commons/form/form.component';
import Section from '../../../../commons/section/section.container';
import SectionSelect from '../../../../commons/section-select/section-select.component';

import { controls, options, optionsMap } from '../interval.constants';

const IntervalForm = ({ setIntervalParams, setVisibleTimer }) => {
  const [formControls, updateFormControls] = useState(controls);
  const changeFormValuesTo = key => controls.map(control => ({
    ...control,
    defaultValue: options[key].data[control.key]
  }));
  const handleSectionSelect = key => updateFormControls(changeFormValuesTo(key));
  const handleFormSubmit = data => {
    setIntervalParams(data);
    setVisibleTimer('interval');
  };

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
        onSelect={handleSectionSelect}
        breakpoints={{ xs: 12, sm: 6 }}
      />

      <Section title="Settings" gutterBottom>
        <Form
          controls={formControls}
          submitIcon={CheckIcon}
          submitFunction={handleFormSubmit}
          submitButton={(
            <Button type="submit" variant="contained" size="small" color="primary">
              Set
              <CheckIcon />
            </Button>
          )}
          buttonPosition="center"
          allowControlsChange
        />
      </Section>

    </Fragment>
  );
};

IntervalForm.propTypes = {
  setIntervalParams: PropTypes.func.isRequired,
  setVisibleTimer: PropTypes.func.isRequired
};

export default IntervalForm;
