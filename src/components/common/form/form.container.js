import PropTypes from 'prop-types';
import Form from './form.component';

import { FORM_TYPES } from './form.constants';

Form.propTypes = {
  type: PropTypes.oneOf(Object.keys(FORM_TYPES)),
  modalTitle: PropTypes.string
};

Form.defaultProps = {
  type: FORM_TYPES.MODAL,
  modalTitle: 'Form'
};

export default Form;
