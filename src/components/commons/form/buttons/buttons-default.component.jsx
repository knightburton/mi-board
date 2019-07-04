import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import { buttonsPropTypes, buttonsDefaultProps } from './buttons.proptypes';
import { BUTTON_POSITIONS } from '../form.constants';
import styles from './buttons.styles';

const useStyles = makeStyles(styles);

const ButtonsDefault = props => {
  const classes = useStyles();
  const {
    buttonPosition,
    buttonFloated,
    submitButton,
    secondaryButton
  } = props;

  const wrapperClasses = clsx(
    {
      [classes.floated]: buttonFloated,
      [classes[buttonPosition]]: Object.values(BUTTON_POSITIONS).includes(buttonPosition)
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
