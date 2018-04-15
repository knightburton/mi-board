export const getHour = value => Math.floor(value / 3600);

export const getMinute = value => Math.floor(value % 3600 / 60);

export const getSecond = value => Math.floor(value % 3600 % 60);

export const getTime = value => {
  const h = getHour(value);
  const m = getMinute(value);
  const s = getSecond(value);

  return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
};
