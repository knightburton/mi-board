import PropTypes from 'prop-types';

import Form from './form.component';

import {
  CONTROL_TYPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS,
  BUTTON_POSITIONS
} from './form.constants';

Form.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(CONTROL_TYPES)).isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]).isRequired,
    label: PropTypes.string,
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
    ])
  })).isRequired,
  buttonPosition: PropTypes.oneOf(Object.values(BUTTON_POSITIONS)),
  buttonFloated: PropTypes.bool,
  buttonFullWidth: PropTypes.bool,
  buttonSize: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  submitIcon: PropTypes.object,
  submitFunction: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  submitDisabled: PropTypes.bool,
  submitVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  submitColor: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  secondaryIcon: PropTypes.object,
  secondaryFunction: PropTypes.func,
  secondaryLabel: PropTypes.string,
  secondaryDisabled: PropTypes.bool,
  secondaryVariant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  secondaryColor: PropTypes.oneOf(Object.values(BUTTON_COLORS))
};

Form.defaultProps = {
  buttonPosition: BUTTON_POSITIONS.CENTER,
  buttonFloated: false,
  buttonFullWidth: false,
  buttonSize: 'medium',
  submitIcon: null,
  submitLabel: 'Submit',
  submitDisabled: false,
  submitVariant: BUTTON_VARIANTS.CONTAINED,
  submitColor: BUTTON_COLORS.PRIMARY,
  secondaryIcon: null,
  secondaryFunction: null,
  secondaryLabel: 'Cancel',
  secondaryDisabled: false,
  secondaryVariant: BUTTON_VARIANTS.CONTAINED,
  secondaryColor: BUTTON_COLORS.PRIMARY,
};

export default Form;
