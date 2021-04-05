import nextMonth from '../src/nextMonth';

describe('nextMonth', () => {
    const january = new Date(2020, 0, 31);
    const march = new Date(2020, 2, 31);
    const april = new Date(2020, 3, 30);
    const december = new Date(2020, 11, 1);

    it('should return February', () => {
        const result = nextMonth(january).getMonth();
        expect(result).toBe(1);
    });
    it('should return April', () => {
        const result = nextMonth(march).getMonth();
        expect(result).toBe(3);
    });
    it('should return May', () => {
        const result = nextMonth(april).getMonth();
        expect(result).toBe(4);
    });
    it('should return January', () => {
        const result = nextMonth(december).getMonth();
        expect(result).toBe(0);
    });
});
