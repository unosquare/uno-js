import { toLocalTime } from './toLocalTime';

const dateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
};

export const toLocaleString = (date: string, locales = 'en-us') => {
    const dateString = toLocalTime(date).toLocaleDateString(locales, dateTimeFormatOptions);
    return dateString !== 'Invalid Date' ? dateString : '';
};
