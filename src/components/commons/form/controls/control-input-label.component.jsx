import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './controls.styles';

const ControlInputLabel = ({ id, label }) => {
  const classes = useStyles();

  return (
    <InputLabel htmlFor={id} className={classes.inputLabel}>
      {label}
    </InputLabel>
  );
};

ControlInputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ControlInputLabel;
