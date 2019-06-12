import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../common/form/form.constants';

export default {
  NAME: {
    key: 'profileName',
    type: CONTROL_TYPES.TEXT,
    label: 'Name',
    required: true,
    validators: [VALIDATORS.TEXT_MIN(3)],
    errorTexts: [ERROR_TEXTS.TEXT_MIN(3)]
  },
  EMAIL: {
    key: 'profileEmail',
    type: CONTROL_TYPES.TEXT,
    label: 'Email',
    required: true,
    validators: [VALIDATORS.EMAIL],
    errorTexts: [ERROR_TEXTS.EMAIL]
  }
};
