import { CONTROL_TYPES } from '../../../commons/form/form.constants';

export default [
  {
    key: 'minutes',
    label: 'Countdown minutes',
    type: CONTROL_TYPES.SLIDER,
    defaultValue: 0,
    min: 0,
    max: 60,
    step: 1,
    inline: true,
  },
  {
    key: 'seconds',
    label: 'Countdown seconds',
    type: CONTROL_TYPES.SLIDER,
    defaultValue: 0,
    min: 0,
    max: 59,
    step: 1,
    inline: true,
  },
];
