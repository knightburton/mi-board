import PropTypes from 'prop-types';

import {
  BUTTON_POSITIONS,
} from '../form.constants';

export const buttonsPropTypes = {
  buttonPosition: PropTypes.oneOf(Object.values(BUTTON_POSITIONS)),
  submitButton: PropTypes.node.isRequired,
  secondaryButton: PropTypes.node,
};

export const buttonsDefaultProps = {
  buttonPosition: BUTTON_POSITIONS.CENTER,
  secondaryButton: null,
};
