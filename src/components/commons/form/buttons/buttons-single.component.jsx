import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import DotIcon from '@material-ui/icons/FiberManualRecord';

import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import styles from './buttons.styles';
import { BUTTON_COLORS } from '../form.constants';

const useStyles = makeStyles(styles);

const ButtonsSingle = props => {
  const classes = useStyles();
  const {
    edit,
    onEditEnable,
    onEditDisable,
    secondaryFunction,
    secondaryIcon,
    secondaryDisabled,
    secondaryColor
  } = props;

  const SecondaryButton = () => {
    const color = secondaryDisabled ? 'inherit' : secondaryColor;
    const Icon = secondaryIcon || DotIcon;

    return (
      <IconButton
        onClick={() => secondaryFunction()}
        disabled={secondaryDisabled}
      >
        <Icon color={color} fontSize="small" />
      </IconButton>
    );
  };

  return (
    <Box className={classes.single}>
      {edit ? (
        <Fragment>
          <IconButton onClick={() => onEditDisable()}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <IconButton type="submit" color="primary">
            <CheckIcon fontSize="small" />
          </IconButton>
        </Fragment>
      ) : (
        <Fragment>
          <IconButton onClick={() => onEditEnable()}>
            <EditIcon fontSize="small" />
          </IconButton>
          {secondaryFunction && <SecondaryButton />}
        </Fragment>
      )}
    </Box>
  );
};

ButtonsSingle.propTypes = {
  edit: PropTypes.bool.isRequired,
  onEditEnable: PropTypes.func.isRequired,
  onEditDisable: PropTypes.func.isRequired,
  secondaryFunction: PropTypes.func,
  secondaryIcon: PropTypes.object,
  secondaryDisabled: PropTypes.bool,
  secondaryColor: PropTypes.string
};

ButtonsSingle.defaultProps = {
  secondaryFunction: null,
  secondaryIcon: null,
  secondaryDisabled: false,
  secondaryColor: BUTTON_COLORS.PRIMARY
};

export default ButtonsSingle;
