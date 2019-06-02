import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../common/form/form.constants';

const from1To100 = {
  errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(1, 100) ],
  validators: [ VALIDATORS.NUMBER_BETWEEN(1, 100) ]
};

const from0To120 = {
  errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 120) ],
  validators: [ VALIDATORS.NUMBER_BETWEEN(0, 120) ]
};

const from0To59 = {
  errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 59) ],
  validators: [ VALIDATORS.NUMBER_BETWEEN(0, 59) ]
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
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Warmup minutes',
    required: false,
    inline: true,
    ...from0To120
  },
  {
    key: 'warmup-sec',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Warmup seconds',
    required: false,
    inline: true,
    ...from0To59
  },
  {
    key: 'high-min',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'High Intensity minutes',
    required: true,
    inline: true,
    ...from0To120
  },
  {
    key: 'high-sec',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'High Intensity seconds',
    required: true,
    inline: true,
    ...from0To59
  },
  {
    key: 'low-min',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Low Intensity minutes',
    required: true,
    inline: true,
    ...from0To120
  },
  {
    key: 'low-sec',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Low Intensity seconds',
    required: true,
    inline: true,
    ...from0To59
  },
  {
    key: 'cooldown-min',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Cooldown minutes',
    required: false,
    inline: true,
    ...from0To120
  },
  {
    key: 'cooldown-sec',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Cooldown seconds',
    required: false,
    inline: true,
    ...from0To59
  }
];
