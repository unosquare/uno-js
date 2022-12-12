import { compareDates, formatQuarter, getWeekDaysRange } from '../src/dateUtils';

describe('formatQuarter', () => {
    it('should return formatted quarter', () => {
        const rawQuarter = '2020-Q1';
        expect(formatQuarter(rawQuarter)).toBe('Q1-2020');
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
});
