import PropTypes from 'prop-types';

import { CONTROL_TYPES } from '../form.constants';

export const controlPropTypes = PropTypes.shape({
  key: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(CONTROL_TYPES)).isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number, PropTypes.bool]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autocomplete: PropTypes.string,
  helperText: PropTypes.string,
  errorTexts: PropTypes.arrayOf(PropTypes.string),
  validators: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
  inline: PropTypes.bool,
  indicator: PropTypes.bool,
  buttons: PropTypes.bool,
  gutterRight: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  rows: PropTypes.number,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  format: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary'])
});


export const statePropTypes = PropTypes.shape({
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.string
});
