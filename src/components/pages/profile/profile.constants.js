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

export const FORM_PHOTO = {
  key: 'photo',
  type: CONTROL_TYPES.FILE,
  label: 'Photo',
  required: true,
  validators: [
    VALIDATORS.FILE_MAX_SIZE(1000000),
    VALIDATORS.FILE_IMAGE_TYPE
  ],
  errorTexts: [
    ERROR_TEXTS.FILE_MAX_SIZE(1000000),
    ERROR_TEXTS.FILE_IMAGE_TYPE
  ]
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
