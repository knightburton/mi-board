import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { DatePicker } from '@material-ui/pickers';

import useStyles from './controls.styles';
import { controlPropTypes, statePropTypes } from './controls.proptypes';

import { CONTROL_DEFAULTS } from '../form.constants';

const ControlText = ({ control, state, onChange }) => {
  const classes = useStyles();
  const classNames = clsx(
    { [classes.inline]: control.inline },
    classes.formControl,
    classes.datePicker
  );

  return (
    <DatePicker
      key={control.key}
      id={control.key}
      error={!!state.error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={classNames}
      label={control.label}
      value={state.value}
      onChange={date => onChange(control.key, date)}
      invalidDateMessage={state.error}
      helperText={control.helperText || null}
      format={control.format || CONTROL_DEFAULTS.DATE_FORMAT}
      animateYearScrolling
      showTodayButton
      fullWidth
    />
  );
};

ControlText.propTypes = {
  control: controlPropTypes.isRequired,
  state: statePropTypes.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ControlText;
