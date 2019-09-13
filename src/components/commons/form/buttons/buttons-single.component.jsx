import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './buttons.styles';

const ButtonsSingle = ({ edit, onEditEnable, onEditDisable, secondaryButton }) => {
  const classes = useStyles();

  return (
    <Box className={classes.single}>
      {edit ? (
        <>
          <IconButton onClick={onEditDisable}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <IconButton type="submit" color="primary">
            <CheckIcon fontSize="small" />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton onClick={onEditEnable}>
            <EditIcon fontSize="small" />
          </IconButton>
          {secondaryButton}
        </>
      )}
    </Box>
  );
};

ButtonsSingle.propTypes = {
  edit: PropTypes.bool.isRequired,
  onEditEnable: PropTypes.func.isRequired,
  onEditDisable: PropTypes.func.isRequired,
  secondaryButton: PropTypes.node,
};

ButtonsSingle.defaultProps = {
  secondaryButton: null,
};

export default ButtonsSingle;
