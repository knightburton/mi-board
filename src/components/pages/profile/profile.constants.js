import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../commons/form/form.constants';

export default {
  NAME: {
    key: 'displayName',
    type: CONTROL_TYPES.TEXT,
    label: 'Name',
    required: true,
    validators: [VALIDATORS.TEXT_MIN(3)],
    errorTexts: [ERROR_TEXTS.TEXT_MIN(3)]
  },
  EMAIL: {
    key: 'email',
    type: CONTROL_TYPES.TEXT,
    label: 'Email',
    required: true,
    validators: [VALIDATORS.EMAIL],
    errorTexts: [ERROR_TEXTS.EMAIL]
  }
};