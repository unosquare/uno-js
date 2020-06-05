import { nextMonth } from '../src/nextMonth';

describe('nextMonth', () => {
    const january = new Date(2020, 0, 31);
    const march = new Date(2020, 2, 31);
    const april = new Date(2020, 3, 30);
    const december = new Date(2020, 11, 1);

    it('should return February 29th 2020', () => {
        const result = nextMonth(january).toDateString();
        expect(result).toBe('Sat Feb 29 2020');
    });
    it('should return April 30th 2020', () => {
        const result = nextMonth(march).toDateString();
        expect(result).toBe('Thu Apr 30 2020');
    });
    it('should return May 31th 2020', () => {
        const result = nextMonth(april).toDateString();
        expect(result).toBe('Sun May 31 2020');
    });
    it('should return Oct 1st 2020', () => {
        const result = nextMonth(december).toDateString();
        expect(result).toBe('Sun Jan 31 2021');
    });
});
