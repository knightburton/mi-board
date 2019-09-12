import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';

import { buttonsPropTypes, buttonsDefaultProps } from './buttons.proptypes';
import { BUTTON_POSITIONS } from '../form.constants';
import useStyles from './buttons.styles';

const ButtonsDefault = props => {
  const classes = useStyles();
  const {
    buttonPosition,
    buttonFloated,
    submitButton,
    secondaryButton,
  } = props;

  const wrapperClasses = clsx(
    {
      [classes.floated]: buttonFloated,
      [classes[buttonPosition]]: Object.values(BUTTON_POSITIONS).includes(buttonPosition),
    },
    classes.buttonWrapper
  );

  return (
    <Box className={wrapperClasses}>
      {secondaryButton}
      {submitButton}
    </Box>
  );
};

ButtonsDefault.propTypes = buttonsPropTypes;

ButtonsDefault.defaultProps = buttonsDefaultProps;

export default ButtonsDefault;
