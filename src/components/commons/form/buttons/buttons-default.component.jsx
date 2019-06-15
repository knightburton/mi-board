import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { buttonsPropTypes, buttonsDefaultProps } from './buttons.proptypes';
import { BUTTON_POSITIONS } from '../form.constants';
import styles from './buttons.styles';

const useStyles = makeStyles(styles);

const ButtonsDefault = props => {
  const classes = useStyles();
  const {
    buttonPosition,
    buttonFloated,
    buttonFullWidth,
    buttonSize,
    submitIcon: SubmitIcon,
    submitLabel,
    submitDisabled,
    submitVariant,
    submitColor,
    secondaryIcon: SecondaryIcon,
    secondaryLabel,
    secondaryDisabled,
    secondaryVariant,
    secondaryColor,
    secondaryFunction
  } = props;

  const wrapperClasses = clsx(
    {
      [classes.floated]: buttonFloated,
      [classes[buttonSize]]: buttonFloated,
      [classes[buttonPosition]]: Object.values(BUTTON_POSITIONS).includes(buttonPosition)
    },
    classes.buttonWrapper
  );

  return (
    <Box className={wrapperClasses}>
      {secondaryFunction && (
        <Button
          variant={secondaryVariant}
          fullWidth={buttonFullWidth}
          className={classes.secondaryButton}
          onClick={() => secondaryFunction()}
          color={secondaryColor}
          disabled={secondaryDisabled}
          size={buttonSize}
          aria-label={secondaryLabel}
        >
          {secondaryLabel}
          {SecondaryIcon && <SecondaryIcon className={classes.buttonIcon} />}
        </Button>
      )}
      <Button
        type="submit"
        variant={submitVariant}
        fullWidth={buttonFullWidth}
        color={submitColor}
        disabled={submitDisabled}
        size={buttonSize}
        aria-label={submitLabel}
      >
        {submitLabel}
        {SubmitIcon && <SubmitIcon className={classes.buttonIcon} />}
      </Button>
    </Box>
  );
};

ButtonsDefault.propTypes = buttonsPropTypes;

ButtonsDefault.defaultProps = buttonsDefaultProps;

export default ButtonsDefault;
