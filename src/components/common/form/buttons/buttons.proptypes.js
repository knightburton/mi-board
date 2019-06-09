import PropTypes from 'prop-types';

import {
  BUTTON_POSITIONS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS
} from '../form.constants';

export const buttonsPropTypes = {
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

export const buttonsDefaultProps = {
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
