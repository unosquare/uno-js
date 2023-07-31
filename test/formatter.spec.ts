import { formatter } from '../src/formatter';

describe('formatter', () => {
    const number = 90;
    const zero = 0;
    const million = 1000000;
    const stringValue = 'Money';

    it('should return formatted million money', () => {
        const id = formatter(million, 'money');
        expect(id).toBe('$1,000,000.00');
    });
    it('should return formatted 0 money', () => {
        const id = formatter(zero, 'money');
        expect(id).toBe('$0.00');
    });
    it('should return N/A on money', () => {
        const id = formatter(stringValue, 'money');
        expect(id).toBe('N/A');
    });
    it('should return 90%', () => {
        const id = formatter(number, 'percentage', { decimals: 0 });
        expect(id).toBe('90%');
    });
    it('should return 90.00%', () => {
        const id = formatter(number, 'percentage');
        expect(id).toBe('90.00%');
    });
    it('should return 90.00', () => {
        const id = formatter(number, 'decimal');
        expect(id).toBe('90.00');
    });
    it('should return 90', () => {
        const id = formatter(number, 'number');
        expect(id).toBe('90');
    });
    it('should return N/A on decimal', () => {
        const id = formatter(stringValue, 'decimal');
        expect(id).toBe('N/A');
    });
    it('should return N/A', () => {
        const id = formatter(null, 'decimal');
        expect(id).toBe('N/A');
    });
    it('should return 90 days', () => {
        const id = formatter(number, 'days');
        expect(id).toBe('90 days');
    });
    it('should return 90 months', () => {
        const id = formatter(number, 'months');
        expect(id).toBe('90 months');
    });
    it('should return 1 day', () => {
        const id = formatter(1, 'days');
        expect(id).toBe('1 day');
    });
    it('should return 1 month', () => {
        const id = formatter(1, 'months');
        expect(id).toBe('1 month');
    });
    it('should return formatted Date', () => {
        const id = formatter(new Date().toLocaleString(), 'date', { keepFormat: true });
        expect(id).toBe(new Date().toLocaleDateString('en-us'));
    });
    it('should return formatted Local Date', () => {
        const id = formatter(new Date().toLocaleString(), 'date');
        expect(id).toBe(new Date().toLocaleDateString('en-us'));
    });
});
