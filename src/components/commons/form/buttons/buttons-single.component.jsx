import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import styles from './buttons.styles';

const useStyles = makeStyles(styles);

const ButtonsSingle = props => {
  const classes = useStyles();
  const {
    edit,
    onEditEnable,
    onEditDisable
  } = props;

  return edit ? (
    <Box className={classes.single}>
      <IconButton onClick={() => onEditDisable()}>
        <CloseIcon fontSize="small" />
      </IconButton>
      <IconButton type="submit" color="primary">
        <CheckIcon fontSize="small" />
      </IconButton>
    </Box>
  ) : (
    <IconButton onClick={() => onEditEnable()}>
      <EditIcon fontSize="small" />
    </IconButton>
  );
};

ButtonsSingle.propTypes = {
  edit: PropTypes.bool.isRequired,
  onEditEnable: PropTypes.func.isRequired,
  onEditDisable: PropTypes.func.isRequired
};

export default ButtonsSingle;
