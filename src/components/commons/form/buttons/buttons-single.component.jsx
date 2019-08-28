import React, { Fragment } from 'react';
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
    onEditDisable,
    secondaryButton
  } = props;

  return (
    <Box className={classes.single}>
      {edit ? (
        <Fragment>
          <IconButton onClick={onEditDisable}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <IconButton type="submit" color="primary">
            <CheckIcon fontSize="small" />
          </IconButton>
        </Fragment>
      ) : (
        <Fragment>
          <IconButton onClick={onEditEnable}>
            <EditIcon fontSize="small" />
          </IconButton>
          {secondaryButton}
        </Fragment>
      )}
    </Box>
  );
};

ButtonsSingle.propTypes = {
  edit: PropTypes.bool.isRequired,
  onEditEnable: PropTypes.func.isRequired,
  onEditDisable: PropTypes.func.isRequired,
  secondaryButton: PropTypes.node
};

ButtonsSingle.defaultProps = {
  secondaryButton: null
};

export default ButtonsSingle;
