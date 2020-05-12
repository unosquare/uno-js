import { toLocalTime } from './toLocalTime';

const dateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
};

export const toLocaleString = (date: string, locales = 'en-us'): string => {
    const dateString = toLocalTime(date).toLocaleDateString(locales, dateTimeFormatOptions);
    return dateString !== 'Invalid Date' ? dateString : '';
};
