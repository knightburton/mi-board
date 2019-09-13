import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';

import InputLabel from './control-input-label.component';
import HelperText from './control-helper-text.component';

import useStyles from './controls.styles';
import { controlPropTypes, statePropTypes } from './controls.proptypes';

import { CONTROL_DEFAULTS } from '../form.constants';

const ControlWrapper = ({ control, state, children }) => {
  const classes = useStyles();
  const classNames = clsx(
    { [classes.inline]: control.inline },
    classes.formControl
  );

  return (
    <FormControl
      error={!!state.error}
      disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
      required={control.required || CONTROL_DEFAULTS.REQUIRED}
      className={classNames}
      fullWidth
    >
      <InputLabel id={control.key} label={control.label} />
      {children}
      <HelperText
        id={control.key}
        error={state.error}
        helperText={control.helperText}
      />
    </FormControl>
  );
};

ControlWrapper.propTypes = {
  control: controlPropTypes.isRequired,
  state: statePropTypes.isRequired,
  children: PropTypes.node.isRequired,
};

export default ControlWrapper;
