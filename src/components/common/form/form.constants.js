export const CONTROL_TYPES = {
  PASSWORD: 'password',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  NUMBER: 'number',
  SELECT: 'select'
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
  ONLY_ALPHANUMERIC: /^[A-Za-z]+$/,
  NUMBER_MIN: min => value => value >= min,
  NUMBER_MAX: max => value => value <= max,
  NUMBER_BETWEEN: (min, max) => value => value >= min && value <= max,
};

export const ERROR_TEXTS = {
  REQUIRED: 'This field is required',
  ONLY_NUMBER: 'This field can only contain numbers',
  ONLY_ALPHANUMERIC: 'This field can only contain alphanumeric characters',
  NUMBER_MIN: min => `This field must be greater or qeual than ${min}`,
  NUMBER_MAX: max => `This field must be smaller or qeual than ${max}`,
  NUMBER_BETWEEN: (min, max) => `This field must be between ${min} and ${max}`
};
