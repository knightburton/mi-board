import moment from 'moment';

// TIME HELPERS

export const getElapsedHours = value => Math.floor(value / 3600);

export const getElapsedMinutes = value => Math.floor((value % 3600) / 60);

export const getElapsedSeconds = value => Math.floor(value % 3600 % 60);

export const getElapsedTimeString = value => {
  const h = getElapsedHours(value);
  const m = getElapsedMinutes(value);
  const s = getElapsedSeconds(value);

  return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};

export const getFormattedTimestamp = timestamp => moment(+timestamp).format('YYYY-MM-DD HH:mm');
