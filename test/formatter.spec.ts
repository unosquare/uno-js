import { formatter, toMoney, toPercentage } from '../src/formatter';

describe('formatter', () => {
    const number = 90;
    const zero = 0;
    const million = 1000000;
    const stringValue = 'Money';

    it('should return formatted million money', () => {
        const id = toMoney(million);
        expect(id).toBe('$1,000,000.00');
    });
    it('should return formatted 0 money', () => {
        const id = toMoney(zero);
        expect(id).toBe('$0.00');
    });
    it('should return formatted $0.00 money', () => {
        const id = toMoney(null);
        expect(id).toBe('$0.00');
    });
    it('should return N/A on money', () => {
        const id = toMoney(stringValue);
        expect(id).toBe('N/A');
    });
    it('should return 90%', () => {
        const id = toPercentage(number, { decimals: 0 });
        expect(id).toBe('90%');
    });
    it('should return 90.00%', () => {
        const id = toPercentage(number);
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
    it('should return N/A with undefined ignore', () => {
        const id = formatter(undefined, 'decimal', { ignoreUndefined: true });
        expect(id).toBe('N/A');
    });
    it('should return undefined', () => {
        const id = formatter(undefined, 'decimal');
        expect(id).toBe(undefined);
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
    it('should return same value', () => {
        const id = formatter('value', undefined);
        expect(id).toBe('value');
    });
});
