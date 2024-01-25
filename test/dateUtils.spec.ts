import { compareDates, getWeekDaysRange, isDate, toLocalTime, toLocaleString, getPreviousQuarter } from '../src/dateUtils';

const stringDate = '2020-01-21T06:00:00';
const locales = 'en-us';

describe('toDate', () => {
    it('Should return: January 21, 2020', () => {
        const date = toLocaleString(stringDate, locales);
        expect(date).toBe('January 21, 2020');
    });

    it('Should return error', () => {
        const date = toLocaleString('aa****');
        expect(date).toBe('');
    });
});

describe('getWeekDaysRange', () => {
    it('should return week days range', () => {
        const week = 2;
        const year = 2020;
        expect(getWeekDaysRange(week, year)).toBe('[1/5 - 1/11]');
    });
});

describe('compareDates', () => {
    it('should return 0 when dates are equal', () => {
        const date1 = '2020-01-01';
        const date2 = '2020-01-01';
        expect(compareDates(date1, date2)).toBe(0);
    });

    it('should return 1 when date1 is greater than date2', () => {
        const date1 = '2020-01-02';
        const date2 = '2020-01-01';
        expect(compareDates(date1, date2)).toBe(1);
    });

    it('should return -1 when date1 is less than date2', () => {
        const date1 = '2020-01-01';
        const date2 = '2020-01-02';
        expect(compareDates(date1, date2)).toBe(-1);
    });
});

describe('toLocalTime', () => {
    it('string should return true if Date', () => {
        const date = toLocalTime('2020-01-21T06:00:00');
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });

    it('string should return true if Date', () => {
        const date = toLocalTime('2020-01-01T08:00:00Z');
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });

    it('Date should return true if date works', () => {
        const date = toLocalTime(new Date(2020, 1, 21, 6, 0, 0));
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });
});

describe('isDate', () => {
    it('Return false on wrong string', () => {
        const result = isDate('2020-01');
        expect(result).toBeFalsy();
    });
    it('Return false on number', () => {
        const result = isDate(5);
        expect(result).toBeFalsy();
    });
    it('Return false on boolean', () => {
        const result = isDate(true);
        expect(result).toBeFalsy();
    });
    it('Return true on Date', () => {
        const result = isDate(new Date());
        expect(result).toBeTruthy();
    });
    it('Return true on valid string', () => {
        const result = isDate('2020-10-07T19:25:32.937Z');
        expect(result).toBeTruthy();
    });
    it('Return true on valid date object', () => {
        const result = isDate(new Date('2020-01-01'));
        expect(result).toBeTruthy();
    });
    it('Return false on invalid date object', () => {
        const result = isDate(new Date('Invalid'));
        expect(result).toBeFalsy();
    });
});

describe('getPreviousQuarter', () => {
    it('should return previous quarter', () => {
        const currentQuarter = '2020-Q2';
        expect(getPreviousQuarter(currentQuarter)).toBe('2020-Q1');
    });

    it('should return previous quarter', () => {
        const currentQuarter = '2020-Q1';
        expect(getPreviousQuarter(currentQuarter)).toBe('2019-Q4');
    });
});
