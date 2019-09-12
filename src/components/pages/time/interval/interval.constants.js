import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../../commons/form/form.constants';

const from1To100 = {
  min: 1,
  max: 100,
  step: 1,
  errorTexts: [ERROR_TEXTS.NUMBER_BETWEEN(1, 100)],
  validators: [VALIDATORS.NUMBER_BETWEEN(1, 100)],
};

const minuteProps = {
  type: CONTROL_TYPES.SLIDER,
  defaultValue: 0,
  min: 0,
  max: 60,
  step: 1,
  inline: true,
};

const secondProps = {
  type: CONTROL_TYPES.SLIDER,
  defaultValue: 0,
  min: 0,
  max: 59,
  step: 1,
  inline: true,
};

export const controls = [
  {
    key: 'tasks',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Number of Tasks',
    required: true,
    ...from1To100,
  },
  {
    key: 'repeats',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Number of Sets',
    required: true,
    ...from1To100,
  },
  {
    key: 'warmupMin',
    label: 'Warmup minutes',
    ...minuteProps,
  },
  {
    key: 'warmupSec',
    label: 'Warmup seconds',
    ...secondProps,
  },
  {
    key: 'highMin',
    label: 'High Intensity minutes',
    ...minuteProps,
  },
  {
    key: 'highSec',
    label: 'High Intensity seconds',
    ...secondProps,
  },
  {
    key: 'lowMin',
    label: 'Low Intensity minutes',
    ...minuteProps,
  },
  {
    key: 'lowSec',
    label: 'Low Intensity seconds',
    ...secondProps,
  },
  {
    key: 'cooldownMin',
    label: 'Cooldown minutes',
    ...minuteProps,
  },
  {
    key: 'cooldownSec',
    label: 'Cooldown seconds',
    ...secondProps,
  },
];

export const options = {
  zero: {
    title: 'Zero',
    description: 'Eerything is set to zero. You have to create a new interval timer set from the scratch.',
    data: {
      tasks: 0,
      repeats: 0,
      warmupMin: 0,
      warmupSec: 0,
      highMin: 0,
      highSec: 0,
      lowMin: 0,
      lowSec: 0,
      cooldownMin: 0,
      cooldownSec: 0,
    },
  },
  fiveOne: {
    title: 'Five-one',
    description: 'You have 5 task to repeat 5 times. Each task takes 51 sec and you have 11 sec to rest.',
    data: {
      tasks: 5,
      repeats: 5,
      warmupMin: 5,
      warmupSec: 0,
      highMin: 0,
      highSec: 51,
      lowMin: 0,
      lowSec: 15,
      cooldownMin: 5,
      cooldownSec: 0,
    },
  },
  goldenThree: {
    title: '3-3x-33-three',
    description: '3 task, 3 set, 3 min warmup, 3 min worktime, 33 sec rest and 3 min cooldown.',
    data: {
      tasks: 3,
      repeats: 3,
      warmupMin: 3,
      warmupSec: 0,
      highMin: 3,
      highSec: 0,
      lowMin: 0,
      lowSec: 33,
      cooldownMin: 3,
      cooldownSec: 0,
    },
  },
  theHour: {
    title: 'The hour',
    description: '5 min warmup and cooldown, 5x2 tasks, each task takes 4 min work and 1 min rest',
    data: {
      tasks: 5,
      repeats: 2,
      warmupMin: 5,
      warmupSec: 0,
      highMin: 4,
      highSec: 0,
      lowMin: 1,
      lowSec: 0,
      cooldownMin: 5,
      cooldownSec: 0,
    },
  },
};

export const optionsMap = Object.keys(options).reduce((a, key) => ([
  ...a,
  {
    key,
    title: options[key].title,
    description: options[key].description,
  },
]), []);
