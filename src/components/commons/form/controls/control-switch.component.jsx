import React from 'react';
import PropTypes from 'prop-types';

import Switch from '@material-ui/core/Switch';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { controlPropTypes, statePropTypes } from './controls.proptypes';

import { CONTROL_DEFAULTS } from '../form.constants';

import useStyles from './controls.styles';

const ControlText = ({ control, state, onChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.switchControl}>
      <FormControlLabel
        control={(
          <Switch
            id={control.key}
            checked={state.value}
            onChange={e => onChange(control.key, e.target.checked)}
            color={control.color || CONTROL_DEFAULTS.SWITCH_COLOR}
            disabled={control.disabled || CONTROL_DEFAULTS.DISABLED}
            aria-describedby={`${control.key}-helper-text`}
          />
        )}
        label={control.label}
      />
    </Box>
  );
};

ControlText.propTypes = {
  control: controlPropTypes.isRequired,
  state: statePropTypes.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ControlText;
