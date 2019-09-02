import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ControlText from './control-text.component';
import ControlTextarea from './control-textarea.component';
import ControlNumber from './control-number.component';
import ControlSelect from './control-select.component';
import ControlSlider from './control-slider.component';
import ControlDate from './control-date.component';
import ControlFile from './control-file.component';

import { CONTROL_TYPES } from '../form.constants';

import * as helpers from '../form.helpers';
import { controlPropTypes } from './controls.proptypes';

const Controls = ({ controls, state, onChange, onIncrease, onDecrease }) => (
  <Fragment>
    {controls.reduce((acc, control) => {
      const props = {
        key: control.key,
        control,
        state: helpers.getControlState(state, control.key),
        onChange,
        ...control.type === CONTROL_TYPES.SLIDER ? { onDecrease, onIncrease } : {}
      };

      if (control.type === CONTROL_TYPES.PASSWORD) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXT) return [...acc, <ControlText {...props} />];
      if (control.type === CONTROL_TYPES.TEXTAREA) return [...acc, <ControlTextarea {...props} />];
      if (control.type === CONTROL_TYPES.NUMBER) return [...acc, <ControlNumber {...props} />];
      if (control.type === CONTROL_TYPES.SELECT) return [...acc, <ControlSelect {...props} />];
      if (control.type === CONTROL_TYPES.SLIDER) return [...acc, <ControlSlider {...props} />];
      if (control.type === CONTROL_TYPES.DATE) return [...acc, <ControlDate {...props} />];
      if (control.type === CONTROL_TYPES.FILE) return [...acc, <ControlFile {...props} />];
      return acc;
    }, [])}
  </Fragment>
);

Controls.propTypes = {
  controls: PropTypes.arrayOf(controlPropTypes).isRequired,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

export default Controls;
