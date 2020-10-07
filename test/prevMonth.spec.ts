import { prevMonth } from '../src/prevMonth';

describe('prevMonth', () => {
    const january = new Date(2020, 0, 31);
    const march = new Date(2020, 2, 31);
    const november = new Date(2020, 10, 1);

    it('should return December', () => {
        const result = prevMonth(january).getMonth();
        expect(result).toBe(11);
    });
    it('should return February', () => {
        const result = prevMonth(march).getMonth();
        expect(result).toBe(1);
    });
    it('should return October', () => {
        const result = prevMonth(november).getMonth();
        expect(result).toBe(9);
    });
});
