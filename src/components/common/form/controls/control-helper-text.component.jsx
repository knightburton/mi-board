import React from 'react';
import PropTypes from 'prop-types';

import FormHelperText from '@material-ui/core/FormHelperText';

const ControlHelperText = ({ id, error, helperText }) => (
  <FormHelperText id={`${id}-helper-text`}>
    {error || helperText}
  </FormHelperText>
);

ControlHelperText.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  helperText: PropTypes.string
};

ControlHelperText.defaultProps = {
  error: null,
  helperText: null
};

export default ControlHelperText;
