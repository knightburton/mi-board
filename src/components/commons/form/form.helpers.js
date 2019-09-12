import {
  CONTROL_TYPES,
  ERROR_TEXTS,
  VALIDATORS,
} from './form.constants';

export const getDefaultControlValuesFrom = controls => controls.reduce((o, { key, defaultValue }) => ({
  ...o,
  [key]: {
    value: defaultValue,
    error: null,
  },
}), {});

export const getControlState = (state, key) => {
  const { [key]: control } = state;

  return control;
};

export const getControlDisplayValue = (controls, state, key) => {
  const { [key]: control } = state;

  if (!control) return null;
  return controls[0].type === CONTROL_TYPES.FILE && control.value.length
    ? control.value[0].name || controls[0].defaultValue
    : control.value;
};

export const getInvalidValidatorIndex = (value, validators) => {
  const invalidIndex = validators.findIndex(validator => (
    (typeof validator === 'function' && !validator(value))
    || (typeof validator === 'object' && !validator.test(value))
  ));

  if (invalidIndex !== -1) return invalidIndex;
  return null;
};

export const validateControl = (control, state) => {
  const { key, required, validators, errorTexts } = control;
  const { value } = getControlState(state, key);

  if (required && !VALIDATORS.REQUIRED.test(value)) return ERROR_TEXTS.REQUIRED;
  if (validators) {
    const invalidValidatorIndex = getInvalidValidatorIndex(value, validators);
    return invalidValidatorIndex !== null ? errorTexts[invalidValidatorIndex] : null;
  }
  return null;
};

export const getIsFormValid = (controls, state) => controls.every(control => validateControl(control, state) === null);

export const validateForm = (controls, state) => controls.reduce((o, control) => ({
  ...o,
  [control.key]: {
    ...state[control.key],
    error: validateControl(control, state),
  },
}), {});
