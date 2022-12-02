import { formatter, FormatTypes } from '../src/formatter';

describe('formatter', () => {
    const number = 90;
    const zero = 0;
    const million = 1000000;
    const stringValue = 'Money';

    it('should return formatted million money', () => {
        const id = formatter(million, FormatTypes.MONEY);
        expect(id).toBe('$1,000,000.00');
    });
    it('should return formatted 0 money', () => {
        const id = formatter(zero, FormatTypes.MONEY);
        expect(id).toBe('$0.00');
    });
    it('should return N/A on money', () => {
        const id = formatter(stringValue, FormatTypes.MONEY);
        expect(id).toBe('N/A');
    });
    it('should return 90%', () => {
        const id = formatter(number, FormatTypes.PERCENTAGE);
        expect(id).toBe('90%');
    });
    it('should return 90.00%', () => {
        const id = formatter(number, FormatTypes.DECIMAL_PERCENTAGE);
        expect(id).toBe('90.00%');
    });
    it('should return 90.00', () => {
        const id = formatter(number, FormatTypes.DECIMAL);
        expect(id).toBe('90.00');
    });
    it('should return 90', () => {
        const id = formatter(number, FormatTypes.NUMBER);
        expect(id).toBe('90');
    });
    it('should return N/A on decimal', () => {
        const id = formatter(stringValue, FormatTypes.DECIMAL);
        expect(id).toBe('N/A');
    });
    it('should return N/A', () => {
        const id = formatter(null, FormatTypes.DECIMAL);
        expect(id).toBe('N/A');
    });
    it('should return 90 days', () => {
        const id = formatter(number, FormatTypes.DAYS);
        expect(id).toBe('90 days');
    });
    it('should return 90 months', () => {
        const id = formatter(number, FormatTypes.MONTHS);
        expect(id).toBe('90 months');
    });
    it('should return formatted Date', () => {
        const id = formatter(new Date().toLocaleString(), FormatTypes.DATE);
        expect(id).toBe(new Date().toLocaleDateString('en-us'));
    });
    it('should return formatted Local Date', () => {
        const id = formatter(new Date().toLocaleString(), FormatTypes.DATE_LOCAL);
        expect(id).toBe(new Date().toLocaleDateString('en-us'));
    });
});
