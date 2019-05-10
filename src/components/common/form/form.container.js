import PropTypes from 'prop-types';
import Form from './form.component';

import { FORM_TYPES, CONTROL_TYPES } from './form.constants';

Form.propTypes = {
  type: PropTypes.oneOf(Object.keys(FORM_TYPES)),
  modalTitle: PropTypes.string,
  controls: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(CONTROL_TYPES)).isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    validFeedback: PropTypes.string,
    invalidFeedback: PropTypes.string,
    validator: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
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
  }))
};

Form.defaultProps = {
  type: FORM_TYPES.MODAL,
  modalTitle: 'Form',
  controls: []
};

export default Form;
