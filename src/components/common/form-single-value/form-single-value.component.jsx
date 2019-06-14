import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import useStyles from './form-single-value.styles';

const FormSingleValue = props => {
  const classes = useStyles();
  const { label, value } = props;

  return (
    <Box className={classes.box}>
      <InputLabel className={classes.label}>
        {label || 'n/a'}
      </InputLabel>
      <Typography variant="body1">
        {value || 'n/a'}
      </Typography>
    </Box>
  );
};

FormSingleValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default FormSingleValue;
