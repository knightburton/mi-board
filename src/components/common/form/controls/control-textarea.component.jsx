import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

import ControlWrapper from './control-wrapper.component';

import { controlPropTypes, statePropTypes } from './control.proptypes';

import { CONTROL_DEFAULTS } from '../form.constants';

const ControlTextarea = ({ control, state, onChange }) => (
  <ControlWrapper
    control={control}
    state={state}
  >
    <Input
      id={control.key}
      value={state.value}
      onChange={e => onChange(control.key, e.target.value)}
      autoComplete={control.autocomplete || CONTROL_DEFAULTS.AUTOCOMPLETE}
      autoFocus={false}
      aria-describedby={`${control.key}-helper-text`}
      rows={control.rows || CONTROL_DEFAULTS.TEXTAREA_ROWS}
      multiline
    />
  </ControlWrapper>
);

ControlTextarea.propTypes = {
  control: controlPropTypes.isRequired,
  state: statePropTypes.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ControlTextarea;
