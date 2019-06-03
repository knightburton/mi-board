import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../common/form/form.constants';

const from1To100 = {
  errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(1, 100) ],
  validators: [ VALIDATORS.NUMBER_BETWEEN(1, 100) ]
};

const minuteProps = {
  type: CONTROL_TYPES.SLIDER,
  defaultValue: 0,
  min: 0,
  max: 60,
  step: 1,
  indicator: true,
  buttons: true,
  inline: true
};

const secondProps = {
  type: CONTROL_TYPES.SLIDER,
  defaultValue: 0,
  min: 0,
  max: 59,
  step: 1,
  indicator: true,
  buttons: true,
  inline: true
};

export default [
  {
    key: 'tasks',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Number of Tasks',
    required: true,
    helperText: 'How many task do you have',
    ...from1To100
  },
  {
    key: 'repeat',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Number of Sets',
    required: true,
    helperText: 'How many times do you want to repeat the tasks',
    ...from1To100
  },
  {
    key: 'warmup-min',
    label: 'Warmup minutes',
    ...minuteProps
  },
  {
    key: 'warmup-sec',
    label: 'Warmup seconds',
    ...secondProps
  },
  {
    key: 'high-min',
    label: 'High Intensity minutes',
    ...minuteProps
  },
  {
    key: 'high-sec',
    label: 'High Intensity seconds',
    ...secondProps
  },
  {
    key: 'low-min',
    label: 'Low Intensity minutes',
    ...minuteProps
  },
  {
    key: 'low-sec',
    label: 'Low Intensity seconds',
    ...secondProps
  },
  {
    key: 'cooldown-min',
    label: 'Cooldown minutes',
    ...minuteProps
  },
  {
    key: 'cooldown-sec',
    label: 'Cooldown seconds',
    ...secondProps
  }
];
