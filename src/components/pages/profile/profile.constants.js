import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../commons/form/form.constants';

export const FORM_DISPLAY_NAME = {
  key: 'displayName',
  type: CONTROL_TYPES.TEXT,
  label: 'Name',
  required: true,
  validators: [VALIDATORS.TEXT_MIN(3)],
  errorTexts: [ERROR_TEXTS.TEXT_MIN(3)]
};

export const FORM_EMAIL = {
  key: 'email',
  type: CONTROL_TYPES.TEXT,
  label: 'Email',
  required: true,
  validators: [VALIDATORS.EMAIL],
  errorTexts: [ERROR_TEXTS.EMAIL]
};

export const FORM_PASSWORD = [
  {
    key: 'verificationCode',
    type: CONTROL_TYPES.TEXT,
    label: 'Verification Code'
  },
  {
    key: 'newPassword',
    type: CONTROL_TYPES.PASSWORD,
    label: 'New Password'
  },
  {
    key: 'confirmPassword',
    type: CONTROL_TYPES.PASSWORD,
    label: 'Confirm Password'
  }
];
