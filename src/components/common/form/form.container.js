import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import Form from './form.component';

import {
  CONTROL_TYPES,
  BUTTON_TYPES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  BUTTON_COLORS
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
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
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
  buttonType: BUTTON_TYPES.FLAT,
  buttonFullWidth: false,
  buttonSize: 'medium',
  submitIcon: CheckIcon,
  submitLabel: 'Submit',
  submitDisabled: false,
  submitVariant: BUTTON_VARIANTS.CONTAINED,
  submitColor: BUTTON_COLORS.PRIMARY,
  secondaryIcon: CloseIcon,
  secondaryFunction: null,
  secondaryLabel: 'Cancel',
  secondaryDisabled: false,
  secondaryVariant: BUTTON_VARIANTS.CONTAINED,
  secondaryColor: BUTTON_COLORS.PRIMARY,
};

export default Form;
