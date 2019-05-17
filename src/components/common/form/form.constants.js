export const CONTROL_TYPES = {
  PASSWORD: 'password',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  SELECT: 'select',
  RANGE: 'range',
};

export const CONTROL_DEFAULTS = {
  REQUIRED: false,
  DISABLED: false,
  NUMBER_MIN: 0,
  NUMBER_MAX: 100,
  NUMBER_STEP: 1,
  TEXTAREA_ROWS: 3,
  SELECT_OPTIONS: null,
  AUTOCOMPLETE: 'nope'
};

export const VALIDATORS = {
  REQUIRED: /\S/,
  ONLY_NUMBER: /^\d+$/,
  ONLY_ALPHANUMERIC: /^[A-Za-z]+$/
};

export const VALIDTOR_TEXTS = {
  REQUIRED: 'This field is required',
  ONLY_NUMBER: 'This field can only contain numbers',
  ONLY_ALPHANUMERIC: 'This field can only contain alphanumeric characters'
};
