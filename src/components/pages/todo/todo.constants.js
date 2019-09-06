export const TODO_PRIORITY_LEVELS = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high',
};

export const BASIC_TODO_CONTROLS = [
  {
    key: 'todo',
    type: 'textarea',
    defaultValue: '',
    label: 'I should...',
    required: true,
    rows: 1,
  },
  {
    key: 'priority',
    type: 'select',
    defaultValue: TODO_PRIORITY_LEVELS.NORMAL,
    label: 'Priority',
    options: Object.values(TODO_PRIORITY_LEVELS).map(value => ({ label: value.replace(/^\w/, c => c.toUpperCase()), value })),
    inline: true,
  },
  {
    key: 'expiry-date',
    type: 'date',
    defaultValue: new Date(),
    label: 'Expiry Date',
    inline: true,
  }
];
