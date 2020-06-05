import { prevMonth } from '../src/prevMonth';

describe('prevMonth', () => {
    const january = new Date(2020, 0, 31);
    const march = new Date(2020, 2, 31);
    const november = new Date(2020, 10, 1);

    it('should return December 1st 2019', () => {
        const result = prevMonth(january).toDateString();
        expect(result).toBe('Tue Dec 31 2019');
    });
    it('should return February 29th 2020', () => {
        const result = prevMonth(march).toDateString();
        expect(result).toBe('Sat Feb 29 2020');
    });
    it('should return Oct 1st 2020', () => {
        const result = prevMonth(november).toDateString();
        expect(result).toBe('Thu Oct 01 2020');
    });
});
