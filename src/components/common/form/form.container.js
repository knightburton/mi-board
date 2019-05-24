import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';

import Form from './form.component';

import { CONTROL_TYPES } from './form.constants';

Form.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(CONTROL_TYPES)).isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]).isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    autocomplete: PropTypes.string,
    helperText: PropTypes.string,
    errorTexts: PropTypes.arrayOf(PropTypes.string),
    validators: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    rows: PropTypes.number,
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })),
      PropTypes.arrayOf(PropTypes.string)
    ])
  })).isRequired,
  submitFloating: PropTypes.bool,
  submitFloatingClasses: PropTypes.string,
  submitFloatingIcon: PropTypes.object,
  submitFunction: PropTypes.func.isRequired,
  submitLabel: PropTypes.string,
  submitFullWith: PropTypes.bool,
  submitDisabled: PropTypes.bool,
  submitSize: PropTypes.oneOf(['small', 'medium', 'large']),
  submitVariant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  submitColor: PropTypes.oneOf(['primary', 'secondary'])
};

Form.defaultProps = {
  submitFloating: false,
  submitFloatingClasses: '',
  submitFloatingIcon: CheckIcon,
  submitLabel: 'Submit',
  submitFullWith: false,
  submitDisabled: false,
  submitSize: 'medium',
  submitVariant: 'contained',
  submitColor: 'primary'
};

export default Form;
