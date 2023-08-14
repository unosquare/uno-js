export const getDateUtc = (date: string) => {
    const dateValue = new Date(date);
    return new Date(dateValue.getTime() + dateValue.getTimezoneOffset() * 60000).toString();
};

const dateOptions: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric' };

const formatWeekDaysRange = (start: Date, end: Date) =>
    `[${start.toLocaleDateString('en-US', dateOptions)} - ${end.toLocaleDateString('en-US', dateOptions)}]`;

export const getWeekDaysRange = (week: number, year: number = null) => {
    year = year || new Date().getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);

    let pivotDay = 1 + (week - 1) * 7 - firstDayOfYear.getDay();

    if (firstDayOfYear.getDay() > 4) pivotDay += 7;

    const weekStart = new Date(year, 0, pivotDay);
    const weekEnd = new Date(year, 0, pivotDay + 6);

    return formatWeekDaysRange(weekStart, weekEnd);
};

export const compareRealDates = (a: Date, b: Date) => {
    if (a < b) return -1;
    return a > b ? 1 : 0;
};

export const compareDates = (a: string, b: string) => compareRealDates(new Date(a), new Date(b));

export const toLocalTime = (date: string | Date): Date => {
    if (typeof date === 'string' && date.toUpperCase().endsWith('Z')) {
        return new Date(date);
    }

    const baseDate = date instanceof Date ? date : new Date(date);
    return new Date(
        Date.UTC(
            baseDate.getFullYear(),
            baseDate.getMonth(),
            baseDate.getDate(),
            baseDate.getHours(),
            baseDate.getMinutes(),
            baseDate.getSeconds(),
            baseDate.getMilliseconds(),
        ),
    );
};

const regexISO = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
const regexDate = /\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])/;

export const isDate = (value: unknown): boolean => {
    const stringValue = value.toString();
    const isValidDate = !Number.isNaN(new Date(stringValue).getDate());

    if (value instanceof Date && isValidDate) return true;

    const isValidDateString = isValidDate && regexDate.exec(stringValue) !== null;
    return isValidDateString && regexISO.exec(new Date(stringValue).toISOString()) !== null;
};

const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
};

export const toLocaleString = (date: string, locales = 'en-us'): string => {
    const dateString = toLocalTime(date).toLocaleDateString(locales, dateTimeFormatOptions);
    return dateString !== 'Invalid Date' ? dateString : '';
};

export const toDate = (obj: string | Record<string, unknown>): void => {
    Object.keys(obj).forEach((prop) => {
        const currentType = typeof obj[prop];
        if (currentType === 'string' && isDate(obj[prop])) {
            obj[prop] = toLocalTime(obj[prop]);
        }
        if (currentType === 'object' && obj[prop]) {
            if (obj[prop] instanceof Array) {
                obj[prop].forEach(toDate);
            } else {
                Object.keys(obj[prop]).forEach(() => toDate(obj[prop]));
            }
        }
    });
};
