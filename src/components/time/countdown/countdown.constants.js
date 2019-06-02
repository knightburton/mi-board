import { CONTROL_TYPES, VALIDATORS, ERROR_TEXTS } from '../../common/form/form.constants';

export default [
  {
    key: 'minutes',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Countdown minutes',
    required: true,
    errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 60) ],
    validators: [ VALIDATORS.NUMBER_BETWEEN(0, 60) ],
    inline: true
  },
  {
    key: 'seconds',
    type: CONTROL_TYPES.NUMBER,
    defaultValue: '',
    label: 'Countdown seconds',
    required: true,
    errorTexts: [ ERROR_TEXTS.NUMBER_BETWEEN(0, 59) ],
    validators: [ VALIDATORS.NUMBER_BETWEEN(0, 59) ],
    inline: true
  }
];
