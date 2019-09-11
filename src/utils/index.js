import moment from 'moment';

// TIME HELPERS
export const getMomentDate = () => moment();
export const getTimestamp = () => moment().valueOf();
export const getTimestampFromDate = date => moment(date).valueOf();
export const getFormattedSeconds = seconds => moment().hour(0).minute(0).second(seconds).format('HH:mm:ss');
export const getFormattedTimestamp = timestamp => moment(+timestamp).format('YYYY-MM-DD HH:mm');
